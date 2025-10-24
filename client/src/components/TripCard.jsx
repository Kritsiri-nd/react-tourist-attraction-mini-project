import { Copy } from "lucide-react";
import { useState } from "react";

export default function TripCard({ trip, onTagClick }) {
  const { title, description, url, photos = [], tags = [] } = trip;
  const [copied, setCopied] = useState(false);

  const shortDesc =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  const mainPhoto = photos[0];
  const subPhotos = photos.slice(1, 4);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3 mb-5">
      {/* รูปใหญ่ */}
      {mainPhoto && (
        <figure>
          <img
            src={mainPhoto}
            alt={title}
            className="w-full h-60 object-cover rounded-xl"
          />
          <figcaption className="sr-only">{title}</figcaption>
        </figure>
      )}

      {/* ชื่อสถานที่ */}
      <h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-blue-600 hover:underline"
        >
          {title}
        </a>
      </h2>

      {/* คำอธิบาย */}
      <p className="text-gray-600">{shortDesc}</p>

      {/* รูปเล็ก 3 รูป */}
      <section aria-label="รูปเพิ่มเติม">
        <ul className="grid grid-cols-3 gap-2">
          {subPhotos.map((photo, idx) => (
            <li key={idx}>
              <img
                src={photo}
                alt={`${title}-thumb-${idx}`}
                className="w-full h-40 object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* หมวดหมู่ */}
      <nav aria-label="แท็ก">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => onTagClick(tag)}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-gray-300"
                aria-label={`กรองด้วยแท็ก ${tag}`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ปุ่ม */}
      <div className="flex gap-3 mt-2 items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          อ่านต่อ
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
          aria-label="คัดลอกลิงก์"
        >
          <Copy size={18} className="text-gray-600" />
        </button>
         {/* แจ้งเตือนคัดลอกแล้ว */}
         {copied && (
          <span className="text-green-600 text-sm transition-opacity duration-500">
            ✅ คัดลอกลิงก์แล้ว!
          </span>
        )}
      </div>
    </article>
  );
}

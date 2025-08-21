import { Copy } from "lucide-react";

export default function TripCard({ trip, onTagClick }) {
  const { title, description, url, photos = [], tags = [] } = trip;

  const shortDesc =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  const mainPhoto = photos[0];
  const subPhotos = photos.slice(1, 4);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3">
      {/* รูปใหญ่ */}
      {mainPhoto && (
        <img
          src={mainPhoto}
          alt={title}
          className="w-full h-60 object-cover rounded-xl"
        />
      )}

      {/* ชื่อสถานที่ */}
      <a
        href={url}
        target="_blank"
        className="text-xl font-bold text-blue-600 hover:underline"
      >
        {title}
      </a>

      {/* คำอธิบาย */}
      <p className="text-gray-600">{shortDesc}</p>

      {/* รูปเล็ก 3 รูป */}
      <div className="grid grid-cols-3 gap-2">
        {subPhotos.map((photo, idx) => (
          <img
            key={idx}
            src={photo}
            alt={`${title}-thumb-${idx}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* หมวดหมู่ */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            onClick={() => onTagClick(tag)}
            className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full cursor-pointer hover:bg-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ปุ่ม */}
      <div className="flex gap-3 mt-2 items-center">
        <a
          href={url}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          อ่านต่อ
        </a>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
        >
          <Copy size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../components/TripCard";

export default function HomePage() {
  const [trips, setTrips] = useState([]);
  const [keywords, setKeywords] = useState("");
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const getTrips = async (query = "") => {
    try {
      const res = await axios.get(`${API_BASE}/trips`, {
        params: { keywords: query },
      });
      setTrips(res.data.data || []);
    } catch (error) {
      console.error("โหลดข้อมูลไม่สำเร็จ:", error);
      setTrips([]);
    }
  };

  useEffect(() => {
    getTrips(keywords);
  }, [keywords]);

  const handleTagClick = (tag) => {
    if (!keywords.includes(tag)) {
      setKeywords(keywords ? keywords + " " + tag : tag);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="max-w-4xl mx-auto">
        {/* ช่องค้นหา */}
        <header className="mb-6">
          <label htmlFor="search" className="sr-only">
            ค้นหาสถานที่ท่องเที่ยว
          </label>
          <input
            id="search"
            type="search"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="ค้นหาสถานที่ท่องเที่ยว..."
            className="w-full border rounded-lg px-4 py-2"
            aria-label="ค้นหาสถานที่ท่องเที่ยว"
          />
        </header>

        {/* แสดงผล */}
        {trips.length === 0 ? (
          <p className="text-gray-500 text-center" role="status">
            ไม่พบข้อมูล
          </p>
        ) : (
          <section aria-live="polite">
            {trips.map((trip) => (
              <TripCard key={trip.eid} trip={trip} onTagClick={handleTagClick}/>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}

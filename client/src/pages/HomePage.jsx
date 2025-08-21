import { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "../components/TripCard";

export default function HomePage() {
  const [trips, setTrips] = useState([]);
  const [keywords, setKeywords] = useState("");

  const getTrips = async (query = "") => {
    try {
      const res = await axios.get("http://localhost:4001/trips", {
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* ช่องค้นหา */}
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="ค้นหาสถานที่ท่องเที่ยว..."
          className="w-full border rounded-lg px-4 py-2 mb-6"
        />

        {/* แสดงผล */}
        {trips.length === 0 ? (
          <p className="text-gray-500 text-center">ไม่พบข้อมูล</p>
        ) : (
          trips.map((trip) => (
            <TripCard key={trip.eid} trip={trip} onTagClick={handleTagClick} />
          ))
        )}
      </div>
    </div>
  );
}

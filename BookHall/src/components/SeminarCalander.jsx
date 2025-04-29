// UpcomingSeminarsSection.jsx

import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import calendar base styles

const SeminarCalander = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample seminar data
  const upcomingSeminars = [
    { id: 1, name: "AI in Healthcare", date: "2025-05-05", hall: "Auditorium A" },
    { id: 2, name: "Green Energy", date: "2025-05-10", hall: "Conference Room B" },
    { id: 3, name: "Smart Cities", date: "2025-05-15", hall: "Hall C" },
    { id: 4, name: "Cybersecurity 101", date: "2025-05-10", hall: "Auditorium B" },
  ];

  const filteredSeminars = upcomingSeminars.filter(
    (seminar) =>
      new Date(seminar.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <section className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl 2xl:text-5xl font-bold text-amber-800 text-center mb-10 drop-shadow">
        Upcoming Seminars
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Calendar */}
        <div className="rounded-2xl w-100 overflow-hidden shadow-lg border border-amber-300 p-4">
          <Calendar
            onChange={setSelectedDate}      
            value={selectedDate}
            tileClassName={({ date }) => {
              const match = upcomingSeminars.find(
                (s) => new Date(s.date).toDateString() === date.toDateString()
              );
              return match ? "bg-amber-100 text-amber-800 font-semibold" : null;
            }}
          />
        </div>

        {/* Seminar List */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-amber-500">
          <h3 className="text-xl 2xl:text-3xl font-semibold text-amber-700 mb-4">
            Seminars on {selectedDate.toDateString()}:
          </h3>

          {filteredSeminars.length === 0 ? (
            <p className="text-gray-500">No seminars scheduled.</p>
          ) : (
            <ul className="space-y-4">
              {filteredSeminars.map((seminar) => (
                <li
                  key={seminar.id}
                  className="bg-orange-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-lg font-bold text-gray-800">{seminar.name}</p>
                  <p className="text-gray-600">Location: {seminar.hall}</p>
                  <p className="text-gray-600">Date: {seminar.date}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default SeminarCalander;

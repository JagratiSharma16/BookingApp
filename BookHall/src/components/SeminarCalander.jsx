import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

// Sample data
const seminars = [
  { id: 1, date: "2025-04-05", hall: "Auditorium A", department: "CSE" },
  { id: 2, date: "2025-04-12", hall: "Auditorium A", department: "CSE" },
  { id: 3, date: "2025-04-15", hall: "Hall B", department: "ECE" },
  { id: 4, date: "2025-05-01", hall: "Auditorium A", department: "IT" },
  { id: 5, date: "2025-04-25", hall: "Hall B", department: "CSE" },
  { id: 6, date: "2025-05-01", hall: "Hall C", department: "ME" },
];

// Aggregate Data
const thisMonth = new Date().getMonth();
const seminarsThisMonth = seminars.filter(s => new Date(s.date).getMonth() === thisMonth);

const hallCounts = seminars.reduce((acc, s) => {
  acc[s.hall] = (acc[s.hall] || 0) + 1;
  return acc;
}, {});

const departmentCounts = seminars.reduce((acc, s) => {
  acc[s.department] = (acc[s.department] || 0) + 1;
  return acc;
}, {});

const mostBookedHall = Object.keys(hallCounts).reduce((a, b) => hallCounts[a] > hallCounts[b] ? a : b);
const mostActiveDept = Object.keys(departmentCounts).reduce((a, b) => departmentCounts[a] > departmentCounts[b] ? a : b);

// Prepare data for charts
const lineData = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const count = seminars.filter(s => new Date(s.date).getDate() === day).length;
  return { day, count };
});

const pieData = Object.entries(departmentCounts).map(([dept, count]) => ({
  name: dept,
  value: count,
}));

const COLORS = ["#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#8b5cf6"];

const SeminarCalander = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 2xl:px-12">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-amber-800 text-center mb-12 drop-shadow-lg">
        Seminar Registration Analytics
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-gray-700 mb-2">This Month</h3>
          <p className="text-3xl 2xl:text-4xl font-bold text-amber-700">{seminarsThisMonth.length}</p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-gray-700 mb-2">Most Booked Hall</h3>
          <p className="text-2xl 2xl:text-3xl font-bold text-green-600">{mostBookedHall}</p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-gray-700 mb-2">Most Active Dept</h3>
          <p className="text-2xl 2xl:text-3xl font-bold text-blue-600">{mostActiveDept}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* Line Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6">Seminar Trends (This Month)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h4 className="text-2xl font-semibold text-gray-800 mb-6">Department Contribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SeminarCalander;

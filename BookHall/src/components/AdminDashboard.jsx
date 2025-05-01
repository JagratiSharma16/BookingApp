import React, { useState , useEffect} from "react";
import defaultHallImage from "../assets/assets_frontend/audi.png";

const AdminDashboard = () => {
  const [halls, setHalls] = useState(() => {
    const saved = localStorage.getItem("halls");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ name: "", accommodation: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("halls", JSON.stringify(halls));
  }, [halls]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = form.name.trim() !== "" && form.accommodation.trim() !== "";

  const handleSubmit = () => {
    if (!isFormValid) {
      setError("Please fill in all required fields.");
      return;
    }

    const hallData = {
      ...form,
      id: editId || Date.now(),
      photoUrl: defaultHallImage, // Use default image
    };

    if (editId !== null) {
      setHalls(halls.map((h) => (h.id === editId ? hallData : h)));
      setEditId(null);
    } else {
      setHalls([...halls, hallData]);
    }

    setForm({ name: "", accommodation: "" });
    setError("");
  };

  const handleEdit = (hall) => {
    setForm({ name: hall.name, accommodation: hall.accommodation });
    setEditId(hall.id);
  };

  const handleDelete = (id) => {
    setHalls(halls.filter((h) => h.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200 p-9">
      <h1 className="text-4xl 2xl:text-5xl font-bold text-center text-amber-700 mb-10 drop-shadow-lg">Admin Dashboard</h1>

      {/* Add/Edit Form */}
      <div className="max-w-3xl 2xl:max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 mb-10">
        <h2 className="text-2xl 2xl:text-4xl font-semibold text-amber-800 mb-6">
          {editId ? "Edit Hall" : "Add New Hall"}
        </h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Hall Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border 2xl:text-xl border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <input
            type="number"
            name="accommodation"
            placeholder="Accommodation"
            value={form.accommodation}
            onChange={handleChange}
            className="w-full p-3 2xl:text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`mt-6 w-full text-lg 2xl:text-xl font-medium text-white py-3 rounded-xl transition-all duration-300 ${
            !isFormValid
              ? "bg-amber-800 cursor-not-allowed"
              : "bg-amber-800 hover:bg-amber-700"
          }`}
        >
          {editId ? "Update Hall" : "Add Hall"}
        </button>
      </div>

      {/* Hall Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {halls.map((hall) => (
          <div
            key={hall.id}
            className="bg-white 2xl:text-xl rounded-3xl shadow-xl p-5 hover:shadow-2xl transition duration-300"
          >
            <img
              src={hall.photoUrl}
              alt={hall.name}
              className="w-full 2xl:h-80 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 mb-1">{hall.name}</h3>
            <p className="text-gray-600 2xl:text-2xl  mb-4">Accommodation: {hall.accommodation}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(hall)}
                className="flex-1 2xl:text-2xl  bg-green-600 hover:bg-green-500 text-white py-2 rounded-xl transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(hall.id)}
                className="flex-1 2xl:text-2xl  bg-red-600 hover:bg-red-500 text-white py-2 rounded-xl transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

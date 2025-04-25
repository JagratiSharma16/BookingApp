import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import defaultHallImage from "../assets/assets_frontend/audi.png";

const AdminDashboard = () => {
  const [halls, setHalls] = useState([]);
  const [form, setForm] = useState({ name: "", accommodation: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const hallData = {
      ...form,
      id: editId || Date.now(),
      photoUrl: defaultHallImage
    };

    if (editId !== null) {
      setHalls(halls.map(h => (h.id === editId ? hallData : h)));
      setEditId(null);
    } else {
      setHalls([...halls, hallData]);
    }

    setForm({ name: "", accommodation: "" });
  };

  const handleEdit = (hall) => {
    setForm({ name: hall.name, accommodation: hall.accommodation });
    setEditId(hall.id);
  };

  const handleDelete = (id) => {
    setHalls(halls.filter(h => h.id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>

      {/* Add / Edit Form */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">{editId ? "Edit Hall" : "Add New Hall"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Hall Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="accommodation"
            placeholder="Accommodation"
            value={form.accommodation}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <Button onClick={handleSubmit} className="mt-4">
          {editId ? "Update Hall" : "Add Hall"}
        </Button>
      </Card>

      {/* Hall Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {halls.map((hall) => (
          <Card key={hall.id}>
            <img
              src={hall.photoUrl}
              alt={hall.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-bold">{hall.name}</h3>
            <p className="text-gray-600">Accommodation: {hall.accommodation}</p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" onClick={() => handleEdit(hall)}>Update</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(hall.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

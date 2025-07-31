import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/createTour.css"; // Create a simple CSS file

const CreateTour = ({onClose, initialData = null}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData?._id) {
        await axios.put(`/api/tours/${initialData._id}`, formData);
        alert("Tour updated successfully!");
      } else {
        await axios.post("/api/tours", formData);
        alert("Tour created successfully!");
      }
      setFormData({ title: "", description: "", price: "", duration: "" });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error submitting tour:", err);
      alert("Failed to save tour");
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Create New Tour</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price (INR)"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (e.g., 7 days)"
        value={formData.duration}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Tour</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default CreateTour;

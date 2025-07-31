import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TourList from "../components/TourList";
import CreateTour from "../components/CreateTour";
import TrekList from "../components/TrekList";
import CreateTrek from "../components/CreateTrek";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [showTourForm, setShowTourForm] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [showTrekForm, setShowTrekForm] = useState(false);
  const [editingTrek, setEditingTrek] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminAuth");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleEditTour = (tour) => {
    setEditingTour(tour);
    setShowTourForm(true);
  };

  const handleDeleteTour = async (id) => {
    try {
      await axios.delete(`/api/tours/${id}`);
      alert("Tour deleted");
      window.location.reload();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleCloseForm = () => {
    setShowTourForm(false);
    setEditingTour(null);
  };

  const handleEditTrek = (trek) => {
    setEditingTrek(trek);
    setShowTrekForm(true);
  };

  const handleDeleteTrek = async (id) => {
    try {
      await axios.delete(`/api/treks/${id}`);
      alert("Trek deleted");
      window.location.reload();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleCloseTrekForm = () => {
    setShowTrekForm(false);
    setEditingTrek(null);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section className="dashboard-section">
        <h2>Tours</h2>
        <button onClick={() => setShowTourForm(!showTourForm)}>
          {showTourForm ? "Close Form" : "Create Tour"}
        </button>
        {showTourForm && (
          <CreateTour onClose={handleCloseForm} initialData={editingTour} />
        )}
        <TourList
          isAdmin={true}
          onEdit={handleEditTour}
          onDelete={handleDeleteTour}
        />
      </section>

      <section className="dashboard-section">
        <h2>Treks</h2>
        <button
          onClick={() => {
            setEditingTrek(null); // Reset any previous edits
            setShowTrekForm(!showTrekForm);
          }}
        >
          {showTrekForm ? "Close Form" : "Create Trek"}
        </button>

        {showTrekForm && (
          <CreateTrek onClose={handleCloseTrekForm} initialData={editingTrek} />
        )}

        <TrekList
          isAdmin={true}
          onEdit={handleEditTrek}
          onDelete={handleDeleteTrek}
        />
      </section>
    </div>
  );
}

export default AdminDashboard;

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

export default function AddPropertyPage() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: { lat: "", lng: "" },
    images: [],
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (!session || session.user.role !== "agent") redirect("/auth/signin");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: parseFloat(value) },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          agentId: session.user.id,
        }),
      });
      if (!res.ok) throw new Error("Failed to add property");
      setSuccess(true);
      setFormData({ title: "", price: "", location: { lat: "", lng: "" }, images: [] });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="layout-wrap">
      <Header2 />
      <SidebarMenu />
      <main>
        <h1>Add New Property</h1>
        {success && <p style={{ color: "green" }}>Property added successfully!</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Property Title"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            type="number"
            name="lat"
            value={formData.location.lat}
            onChange={handleChange}
            placeholder="Latitude"
            step="any"
            required
          />
          <input
            type="number"
            name="lng"
            value={formData.location.lng}
            onChange={handleChange}
            placeholder="Longitude"
            step="any"
            required
          />
          {/* Image uploads require additional setup */}
          <button type="submit">Add Property</button>
        </form>
      </main>
      <div className="overlay-dashboard" />
    </div>
  );
}
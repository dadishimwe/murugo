"use client";

import { useEffect, useState } from "react";
import Header1 from "@/components/headers/Header1";
import Properties2 from "@/components/properties/Properties2";
import React from "react";

export const metadata = {
  title: "Property Halfmap List || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default function PropertyHalfmapListPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header1 />
      <Properties2 properties={properties} />
    </>
  );
}
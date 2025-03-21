"use client";

import { useEffect, useState } from "react";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PropertyDetails2 from "@/components/property-details/PropertyDetails2";
import Slider2 from "@/components/property-details/Slider2";

export async function generateMetadata({ params }) {
  const property = await fetchPropertyById(params.id);
  return {
    title: property
      ? `${property.title} || Homelengo - Real Estate React Nextjs Template`
      : "Property Details 02 || Homelengo - Real Estate React Nextjs Template",
    description: property ? `View details of ${property.title}` : "Homelengo - Real Estate React Nextjs Template",
  };
}

export default function PropertyDetailsV2Page({ params }) {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/properties?id=${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch property");
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [params.id]);

  if (loading) return <p>Loading property...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <>
      <Header1 />
      <Slider2 />
      <PropertyDetails2 property={property} />
      <Footer1 />
    </>
  );
}

export { fetchPropertyById } from "@/lib/api";
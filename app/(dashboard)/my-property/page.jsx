"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MyProperty from "@/components/dashboard/MyProperty";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

export const metadata = {
  title: "My Property || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default function MyPropertyPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) redirect("/auth/signin");

  return (
    <div className="layout-wrap">
      <Header2 />
      <SidebarMenu />
      <MyProperty />
      <div className="overlay-dashboard" />
    </div>
  );
}
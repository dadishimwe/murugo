"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Dashboard from "@/components/dashboard/Dashboard";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) redirect("/auth/signin");

  return (
    <div className="layout-wrap">
      <Header2 />
      <SidebarMenu />
      <main>
        <h1>Welcome, {session.user.email}</h1>
        <p>Role: {session.user.role}</p>
        <Dashboard />
      </main>
      <div className="overlay-dashboard" />
    </div>
  );
}
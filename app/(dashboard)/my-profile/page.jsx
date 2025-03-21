"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MyProfile from "@/components/dashboard/MyProfile";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

export default function MyProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) redirect("/auth/signin");

  return (
    <div className="layout-wrap">
      <Header2 />
      <SidebarMenu />
      <MyProfile />
      <div className="overlay-dashboard" />
    </div>
  );
}
"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MyFavorite from "@/components/dashboard/MyFavorite";
import SidebarMenu from "@/components/dashboard/SidebarMenu";
import Header2 from "@/components/headers/Header2";
import React from "react";

export default function MyFavoritesPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) redirect("/auth/signin");

  return (
    <div className="layout-wrap">
      <Header2 />
      <SidebarMenu />
      <MyFavorite />
      <div className="overlay-dashboard" />
    </div>
  );
}
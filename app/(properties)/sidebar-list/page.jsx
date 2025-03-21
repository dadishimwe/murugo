import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties6 from "@/components/properties/Properties6";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Sidebar List Property || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function SidebarListPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties6 properties={properties} />
      <Footer1 />
    </>
  );
}
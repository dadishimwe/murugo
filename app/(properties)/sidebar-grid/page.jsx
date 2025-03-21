import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties4 from "@/components/properties/Properties4";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Sidebar Grid Property || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function SidebarGridPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties4 properties={properties} />
      <Footer1 />
    </>
  );
}
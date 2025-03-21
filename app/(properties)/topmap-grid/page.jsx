import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties3 from "@/components/properties/Properties3";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Topmap Grid Property || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function TopMapGridPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties3 properties={properties} />
      <Footer1 />
    </>
  );
}
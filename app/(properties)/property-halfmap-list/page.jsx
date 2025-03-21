import Header1 from "@/components/headers/Header1";
import Properties2 from "@/components/properties/Properties2";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Property Halfmap List || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function PropertyHalfmapListPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties2 properties={properties} />
    </>
  );
}
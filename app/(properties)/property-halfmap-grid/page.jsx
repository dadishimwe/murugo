import Header1 from "@/components/headers/Header1";
import Properties1 from "@/components/properties/Properties1";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Property Halfmap Grid || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function PropertyHalfmapGridPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties1 properties={properties} />
    </>
  );
}
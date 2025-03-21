import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Properties5 from "@/components/properties/Properties5";
import { fetchProperties } from "@/lib/api";

export const metadata = {
  title: "Topmap List Property || Homelengo - Real Estate React Nextjs Template",
  description: "Homelengo - Real Estate React Nextjs Template",
};

export default async function TopmapListPage() {
  const properties = await fetchProperties();

  return (
    <>
      <Header1 />
      <Properties5 properties={properties} />
      <Footer1 />
    </>
  );
}
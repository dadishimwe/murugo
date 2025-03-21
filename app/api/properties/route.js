import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const client = await clientPromise;
    const db = client.db("homelengo");

    if (id) {
      const property = await db.collection("properties").findOne({ _id: new ObjectId(id) });
      if (!property) return new Response(JSON.stringify({ error: "Property not found" }), { status: 404 });
      return new Response(JSON.stringify(property), { status: 200 });
    }

    const properties = await db.collection("properties").find().toArray();
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch properties" }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();
    const client = await clientPromise;
    const db = client.db("homelengo");
    const property = {
      title: formData.title,
      price: parseFloat(formData.price),
      location: formData.location, // { lat: number, lng: number }
      images: formData.images, // Array of image URLs
      agentId: formData.agentId,
      createdAt: new Date(),
    };
    const result = await db.collection("properties").insertOne(property);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add property" }), { status: 500 });
  }
}
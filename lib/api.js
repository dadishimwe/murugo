import clientPromise from "@/lib/mongodb";

export async function fetchProperties() {
  try {
    const client = await clientPromise;
    const db = client.db("homelengo");
    const properties = await db.collection("properties").find().toArray();
    return properties;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return [];
  }
}

export async function fetchPropertyById(id) {
  try {
    const client = await clientPromise;
    const db = client.db("homelengo");
    const { ObjectId } = require("mongodb");
    const property = await db.collection("properties").findOne({ _id: new ObjectId(id) });
    return property || null;
  } catch (error) {
    console.error("Failed to fetch property:", error);
    return null;
  }
}
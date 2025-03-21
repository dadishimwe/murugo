import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("homelengo");
    const blogs = await db.collection("blogs").find().toArray();
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  }
}
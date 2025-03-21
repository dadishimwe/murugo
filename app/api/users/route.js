import clientPromise from "@/lib/mongodb";
import { getSession } from "next-auth/react";

export async function GET(request) {
  const session = await getSession({ req: request });
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  try {
    const client = await clientPromise;
    const db = client.db("homelengo");
    const user = await db.collection("users").findOne({ email: session.user.email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ id: user._id, email: user.email, role: user.role }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), { status: 500 });
  }
}
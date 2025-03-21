import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { email, password, role } = await request.json();
    const client = await clientPromise;
    const db = client.db("homelengo");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      email,
      password: hashedPassword,
      role: role || "user", // Default to "user" if not specified
      createdAt: new Date(),
    };
    const result = await db.collection("users").insertOne(user);
    return new Response(JSON.stringify({ message: "User registered", id: result.insertedId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to register user" }), { status: 500 });
  }
}
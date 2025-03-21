import connectDatabase from "@/lib/mongoose";
import User from "@/models/User";
// import { userAgent } from "next/server";
import { NextResponse } from "next/server";

// Connect DataBase
await connectDatabase();

export async function POST(request) {
  // Add User
  const { name, email } = await request.json();
  try {
    // Already user
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // New User Create 
    const newUser = await User.create({ name, email });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

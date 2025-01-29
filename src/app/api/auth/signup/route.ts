import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const { fullname, email, password } = await request.json();

    // Validate user input data
    const validateUser = z.object({
      fullname: z.string(),
      email: z.string().email().min(5).max(30),
      password: z.string().min(10).max(30),
    });

    const parseUser = validateUser.safeParse({ fullname, email, password });

    if (!parseUser.success) {
      return NextResponse.json(
        { message: "Validation error", errors: parseUser.error.errors },
        { status: 400 }
      );
    }

    // Check for existing user
    const findExistingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (findExistingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 } // Conflict
      );
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the user
    await prisma.user.create({
      data: { name:fullname, email, password: hashPassword },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Ensure the PrismaClient is closed
  }
};

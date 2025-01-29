import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Error from "next/error";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();

    // Define Zod schema for input validation
    const checkUserObject = z.object({
      email: z.string().email().min(3).max(30),
      password: z.string().min(10).max(30),
    });

    // Validate the input
    const parseUser = checkUserObject.safeParse({ email, password });
    if (!parseUser.success) {
      return NextResponse.json(
        {
          message: "Invalid input",
          errors: parseUser.error.format(),
        },
        { status: 400 }
      );
    }

    const prisma = new PrismaClient();

    // Find the user
    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    // Generate a JWT
    const secretKey = process.env.JWT_SECRET || "fallback_secret_key";
    const createToken = jwt.sign({ id: findUser.id }, secretKey, {
      expiresIn: "4h",
    });

    // Set the cookie with security attributes
    const response = NextResponse.json(
      { message: "Login successful", token: createToken },
      { status: 200 }
    );

    response.cookies.set("authToken", createToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 4 * 60 * 60, // 4 hours
    });

    return response;
  } catch (error:any) {
    console.error("Error during login:", error.message);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};

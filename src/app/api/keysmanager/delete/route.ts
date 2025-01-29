import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export const GET = async (request: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const token = request.cookies.get("authToken");
    const url = new URL(request.url);
    const provider = url.searchParams.get("provider"); // Get `provider` from query params

    if (!token?.value) {
      return NextResponse.json({ message: "Please Login" }, { status: 401 });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(
        token.value,
        "fallback_secret_key"
      ) as jwt.JwtPayload;
    } catch (err) {
      console.error("JWT Error:", err);
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    if (!decodedToken.id || !provider) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    const response = await prisma.userSellorSecrets.deleteMany({
      where: {
        userId: parseInt(decodedToken.id, 10),
        provider,
      },
    });

    return NextResponse.json(
      { message: `${response.count} record(s) deleted` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting record:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

// import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import jwt from "jsonwebtoken";

// export const GET = async (request: NextRequest) => {
//   const prisma = new PrismaClient();
//   try {
//     const token = request.cookies.get("authToken");
//     if (!token?.value) {
//       return NextResponse.json({ message: "Please Login" }, { status: 405 });
//     }

//     let decodedToken;
//     try {
//       decodedToken = jwt.verify(
//         token.value,
//         "fallback_secret_key"
//       ) as jwt.JwtPayload;
//     } catch (err) {
//       console.log(err)
//       return NextResponse.json(
//         { message: "Invalid or expired token" },
//         { status: 401 }
//       );
//     }
//     const response = await prisma.userSellorSecrets.findMany({
//       where: {
//         userId: decodedToken.id,
//       },
//     });
//     return NextResponse.json({ message: response }, { status: 200 });
//   } catch (error) {
//     console.log(error)
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// };



import { NextResponse} from "next/server";

export const GET = async() =>{
try {
    return NextResponse.json({message:"Amazon API"},{status:201})
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"Server Error"},{status:500})

}
}
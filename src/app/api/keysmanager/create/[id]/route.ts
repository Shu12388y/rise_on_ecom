// import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import Cryptr from "cryptr";
// import jwt from "jsonwebtoken";

// export const POST = async (request: NextRequest, { params }: { params: { id: string } }) => {
//     const prisma = new PrismaClient();
//     try {
//         const data = await request.json();
//         const id = params.id;
//         const cryptr = new Cryptr('myTotallySecretKey');
//         const token = request.cookies.get('authToken');

//         if (!token?.value) {
//             return NextResponse.json({ message: "Please Login" }, { status: 405 });
//         }

//         let decodedToken;
//         try {
//             decodedToken = jwt.verify(token.value, "fallback_secret_key") as jwt.JwtPayload;
//         } catch (err) {
//             console.log(err)
//             return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
//         }

//         if (id !== "AMAZON" && id !== "FLIPKART" && id !== "MEESHO") {
//             return NextResponse.json({ message: "Invalid Provider" }, { status: 403 });
//         }

//         if (!data.clientId || !data.clientSecret || !data.refreshToken) {
//             return NextResponse.json({ message: "All keys (clientId, clientSecret, refreshToken) are required" }, { status: 400 });
//         }

//         const encryptClientId = cryptr.encrypt(data.clientId);
//         const encryptClientSecret = cryptr.encrypt(data.clientSecret);
//         const encryptRefreshToken = cryptr.encrypt(data.refreshToken);

//         await prisma.userSellorSecrets.create({
//             data: {
//                 userId: parseInt(decodedToken.id),
//                 provider: id,
//                 clientId: encryptClientId,
//                 clientSecret: encryptClientSecret,
//                 refreshToken: encryptRefreshToken,
//             }
//         });
//         return NextResponse.json({ message: "Created" }, { status: 201 });

//     } catch (error) {
//         console.error("Error:", error); // Log error for debugging
//         return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//     } finally {
//         await prisma.$disconnect();
//     }
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
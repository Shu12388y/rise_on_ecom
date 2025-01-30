// import { NextResponse, NextRequest } from "next/server";
// import axios from "axios";

// const BASE_URL = "https://sellingpartnerapi-na.amazon.com";
// const CLIENT_ID = "your_client_id";
// const CLIENT_SECRET = "your_client_secret";
// const REFRESH_TOKEN = "your_refresh_token";
// async function getAuth() {
//   try {
//     const response = await axios.post(
//       "https://api.amazon.com/auth/o2/token",
//       new URLSearchParams({
//         grant_type: "refresh_token",
//         refresh_token: REFRESH_TOKEN,
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//       }).toString(),
//       {
//         headers: {
//           "Content-Type": "applcation/x-www-form-urlencoded",
//         },
//       }
//     );
//     return response.data.access_token;
//   } catch (error) {
//     return error;
//   }
// }


// async function fetchSalesData(accessToken:string) {
//     const startDate = new Date();
//     startDate.setDate(startDate.getDate() - 30);
//     const endDate = new Date();
  
//     const url = `${BASE_URL}/orders/v0/orders?MarketplaceIds=ATVPDKIKX0DER&CreatedAfter=${startDate.toISOString()}&CreatedBefore=${endDate.toISOString()}`;
//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//       "x-amz-access-token": accessToken,
//       "x-amz-date": new Date().toISOString(),
//     };
  
//     const response = await axios.get(url, { headers });
//     const orders = response.data.Orders;
  
//     let totalRevenue = 0;
//     let amountReceived = 0;
//     let amountPending = 0;
  
//     orders.forEach((order:any) => {
//       const orderTotal = parseFloat(order.OrderTotal.Amount || 0);
//       totalRevenue += orderTotal;
//       if (order.PaymentMethod === "COD") {
//         amountPending += orderTotal;
//       } else {
//         amountReceived += orderTotal;
//       }
//     });
  
//     return { totalRevenue, amountReceived, amountPending };
//   }

// export const GET = async (_: NextRequest) => {
//     try {
//         const accessToken = await getAuth();
//         const salesData = await fetchSalesData(accessToken);
//         return NextResponse.json({message:salesData},{status:200})
//       } catch (error) {
//         return NextResponse.json({message:"Server Error"},{status:500})
//       }
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
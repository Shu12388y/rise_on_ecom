import { NextRequest,NextResponse } from "next/server"

export const GET  = async(request:NextRequest)=>{
    try {
        // await request.cookies.delete('authToken')
        const response = NextResponse.json({
            message:"Sucess"
        },{
            status:200
        })
        response.cookies.delete('authToken')
        return response
    } catch (error) {
        return NextResponse.json({
            messsage:"Server Error"
        },{
            status:500
        })
    }
}
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.redirect("http://localhost:3001");
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

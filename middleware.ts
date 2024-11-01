/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
// export async function middleware(req: NextRequest) {




  
//   let country = req.geo?.country;
//   console.log(`Country: ${country}`);
//   // Temporarily blocking traffic from Russia since I have too many requests from there.
//   if (country === "RU") {
//     return new NextResponse("Access Denied", { status: 403 });
//   }

//   // Allow the request to proceed
//   return NextResponse.next();
// }

// Optionally, specify paths to apply the middleware

export default clerkMiddleware(

)
export const config = {
  matcher:[
     // Skip Next.js internals and all static files, unless found in search params
     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
     // Always run for API routes
     '/(api|trpc)(.*)',
  ],
};

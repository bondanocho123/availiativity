import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("access_token")

    const isAuthPage = request.nextUrl.pathname.startsWith("/login")
    const isDashboard = request.nextUrl.pathname.startsWith("/dashboard")

    if (!token && request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"]
}
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if user is trying to access protected routes
  const protectedRoutes = ["/plans", "/chat"]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (isProtectedRoute) {
    // In a real app, you'd check for a valid JWT token
    // For this demo, we'll check localStorage on the client side
    const response = NextResponse.next()
    response.headers.set("x-middleware-cache", "no-cache")
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/plans/:path*", "/chat/:path*"],
}

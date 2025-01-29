import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Example: Check for an authentication cookie
    const token = request.cookies.get('authToken');;
    // If the user is not authenticated, redirect to the login page
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If authenticated, allow access
    return NextResponse.next();
}

// Define which paths should use the middleware
export const config = {
    matcher: ['/dashboard/:marketplace*'], // Protects all routes under /protected/
};

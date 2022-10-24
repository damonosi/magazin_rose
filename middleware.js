import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	const user = {
		name: token?.name,
		email: token?.email,
		image: token?.image,
		isAdmin: token?.isAdmin ? "true" : "false",
	};

	if (!token?.name) {
		const signInPage = "/auth/login";
		const signInUrl = new URL(signInPage, req.nextUrl.origin);
		signInUrl.searchParams.append("callbackUrl", req.url);
		return NextResponse.redirect(signInUrl);
	} else if (user?.isAdmin === "false") {
		const homePage = "/";
		const goHomeUrl = new URL(homePage, req.nextUrl.origin);
		goHomeUrl.searchParams.append("callbackUrl", req.url);
		return NextResponse.redirect(goHomeUrl);
	} else {
		return NextResponse.next();
	}
}
export const config = {
	matcher: "/dashboard/:path*",
};

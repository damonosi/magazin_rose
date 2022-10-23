import type { NextFetchEvent, NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

interface User {
	name?: string | null | undefined;
	 email?: string | null | undefined;
	  image?: string | null | undefined;
	  isAdmin?: string | null | undefined;
  }

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };

  const session = await getSession({ req: requestForNextAuth });
  const user=await session?.user;
  
  user.isAdmin:Boolean=await session?.user?.isAdmin? 'true':'false';
  
  
  if (!session) {
    const signInPage = '/auth/login';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);
    return NextResponse.redirect(signInUrl);
   
  }
 else if(user?.isAdmin ==='false'){
	
	const homePage = '/';
	const goHomeUrl = new URL(homePage, req.nextUrl.origin);
    goHomeUrl.searchParams.append('callbackUrl', req.url);
	return NextResponse.redirect(goHomeUrl);
  }
  else {
    // the user is not logged in, redirect to the sign-in page
    return NextResponse.next();
  }
}
export const config = {
	matcher: "/dashboard/:path*",
};

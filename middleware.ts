import type { NextFetchEvent, NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

type  User= {
	name?: string | null  ;
	 email?: string | null  ;
	  image?: string | null  ;
	  isAdmin?: string | null| undefined ;
  }

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  const user:User={
name:session?.user?.name,
email: session?.user?.email  ,
image: session?.user?.image  ,
isAdmin:await session?.user?.isAdmin? 'true':'false',
  }
  
 console.log('este admin?',user.isAdmin)
  
  
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

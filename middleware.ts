import NextAuth from "next-auth";
import { authConfig } from "@/app/auth.config";
import { NextResponse } from 'next/server';

export function middleware() {
  // 始终允许请求通过，不做任何身份验证
  return NextResponse.next();
}

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
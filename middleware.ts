import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/create")) {
    const accessKey = req.cookies.get("accessKey")?.value;
    if (accessKey !== process.env.NEXT_PUBLIC_ACCESS_KEY) {
      url.pathname = "/protected";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

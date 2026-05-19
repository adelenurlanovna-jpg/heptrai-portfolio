import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except API routes, Next.js internals, static assets,
  // and auto-generated metadata icons (icon, apple-icon, opengraph-image).
  matcher: [
    "/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};

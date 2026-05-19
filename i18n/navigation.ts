import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrapped versions of Next.js navigation APIs that are aware of the locale.
// Use these instead of `next/link` / `next/navigation` in client components.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

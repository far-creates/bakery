"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  href,
  linkName,
  exact = false,

  ...props
}: {
  href: string;
  linkName: string;
  exact?: boolean;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);
  const newClassName = isActive ? "text-accent" : "text-primary";

  return (
    <Link href={href} className={newClassName}>
      {linkName}
    </Link>
  );
}

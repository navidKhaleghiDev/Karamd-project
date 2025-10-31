"use client";

import { Home, Box, Wallet } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const items = [
  { href: "/home", label: "خانه", icon: Home },
  { href: "/fund", label: "صندوق‌ها", icon: Box },
  { href: "/capital", label: "سرمایه‌ من", icon: Wallet },
];

export function Footer(): JSX.Element {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.lang as string) || "fa";

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white  border-gray-200 shadow-sm max-w-116 m-auto">
      <nav className="flex justify-around items-center py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const localizedHref = `/${locale}${href}`;
          const isActive = pathname === localizedHref;

          return (
            <Link
              key={localizedHref}
              href={localizedHref}
              className="flex flex-col items-center text-xs font-medium"
            >
              <Icon
                size={22}
                className={clsx(
                  "transition-colors",
                  isActive ? "text-orange-500" : "text-gray-500"
                )}
              />
              <span
                className={clsx(
                  "mt-1",
                  isActive ? "text-orange-500" : "text-gray-600"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

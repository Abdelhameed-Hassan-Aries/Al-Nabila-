"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type NavLinkHighlightProps = {
  href: string;
  children: React.ReactNode;
};

const underlineVariants = {
  initial: { scaleX: 0, opacity: 0, transformOrigin: "left" },
  active: { scaleX: 1, opacity: 1, transformOrigin: "left" },
};

const NavLinkHighlight = ({ href, children }: NavLinkHighlightProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/?$/, "") ?? "";
  const normalizedHref = href.replace(/\/?$/, "");
  const isActive = normalizedPath === normalizedHref;

  return (
    <Link
      ref={ref}
      href={href}
      className={clsx("nav-link", isActive && "active")}
    >
      <span>{children}</span>
      <motion.span
        className="nav-underline"
        variants={underlineVariants}
        initial="initial"
        animate={isActive ? "active" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  );
};

export default NavLinkHighlight;

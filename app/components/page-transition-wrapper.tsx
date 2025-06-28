"use client";
import { usePathname } from "next/navigation";
import PageTransition from "./page-transition";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return <PageTransition key={pathname}>{children}</PageTransition>;
}

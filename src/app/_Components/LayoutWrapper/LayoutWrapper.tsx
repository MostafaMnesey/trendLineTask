"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Toaster } from "react-hot-toast";
import AuthGuard from "@/app/_utils/gurad/AuthGurad";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {isLoginPage ? (
        children
      ) : (
        <AuthGuard>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </AuthGuard>
      )}
    </>
  );
}


import React from "react";

import Verify from "@/app/_Components/(auth)/Auth/Verify/Verify";
// src/app/(auth)/signUp/page.tsx
export const metadata = {
  title: "Sign Up | My App",
  description: "Create your account to get started",
};

export default function VerifyPage() {
  return (
    <>
      <Verify />
    </>
  );
}

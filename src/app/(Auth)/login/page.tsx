import Login from "@/app/_Components/(auth)/Auth/login/Login";
import React from "react";
// src/app/(auth)/signUp/page.tsx
export const metadata = {
  title: "Login | My App",
  description: "Create your account to get started",
};

export default function page() {
  return (
    <div>
      <Login />
    </div>
  );
}

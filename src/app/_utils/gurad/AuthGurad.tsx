"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/_Components/Loading/Loading";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login"); 
    } else {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, [router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader width="full" height="full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

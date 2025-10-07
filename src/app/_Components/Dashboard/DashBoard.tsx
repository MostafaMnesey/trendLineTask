"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "flowbite-react";
import { toast } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import Image from "next/image";

// src/app/(auth)/signUp/page.tsx
export const metadata = {
  title: "Sign Up | My App",
  description: "Create your account to get started",
};

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleMockup = () => {
    router.push("/mockup");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login to access dashboard");
      router.push("/login");
      return;
    }

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/user-data`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.status_code === 200) {
          setUserName(data.data.name || data.data.email || "User");
          setUserImage(data.data.image || data.data.image || "");
        }
      } catch (error) {
        const err = error as AxiosError<Error>;
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          toast.error("Session expired. Please login again.");
          router.push("/login");
          return;
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      const err = error as AxiosError<Error>;

      toast.error(
        err.response?.data?.message ||
          err.message ||
          "An error occurred. Please try again."
      );
    }
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#BE968E] mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ffffff] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <div className="relative">
              {userImage ? (
                <Image
                  src={userImage}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
              ) : null}
              <div
                className={`w-16 h-16 rounded-full bg-[#BE968E] flex items-center justify-center text-white font-bold text-xl ${
                  userImage ? "hidden" : "flex"
                }`}
              >
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[#BE968E]">
                Welcome, {userName}!
              </h1>
              <p className="text-neutral-600 mt-2">
                You are successfully logged in to your dashboard.
              </p>
            </div>
          </div>

          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 focus:ring-red-300"
          >
            Logout
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="flex justify-center items-center h-[60vh]">
          <Card
            onClick={handleMockup}
            className="border border-[#BE968E] group  bg-white shadow-md hover:shadow-lg transition-all  hover:border-[#BE968E] hover:bg-[#BE968E]  "
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#BE968E] mb-2 group-hover:text-white">
                UI Mockup
              </h3>
              <p className="text-neutral-600 group-hover:text-white">
                This is a UI Mockup for the dashboard.
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
      </div>
    </div>
  );
}

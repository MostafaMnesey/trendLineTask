"use client";
import React, { useState } from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import generalFields from "../../../../_utils/genralFeilds";
import * as yup from "yup";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "@/app/_Components/Loading/Loading";

export default function Verify() {
  const router = useRouter();
  const { code }: { code: yup.StringSchema<string, yup.AnyObject> } = generalFields();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape({
    code: code,
  });
  const formik = useFormik<{ code: string }>({
    initialValues: {
      code: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email`,
          values,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
       

        if (data.status_code === 200) {
          toast.success(data.message);
          router.push("/login");
        }
      } catch (error) {
        const err = error as AxiosError<Error>;

        toast.error(
          err.response?.data?.message ||
            err.message ||
            "An error occurred. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
  });
  const handleResendCode = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email/resend-code`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     
      if (data.status_code === 200) {
        toast.success(data.message);
      }
    } catch (error) {
      const err = error as AxiosError<Error>;
 
      toast.error(
        err.response?.data?.message ||
          err.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-[#ffffff] px-4">
      <Card className="w-full max-w-md border border-[#BE968E] bg-white shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[#BE968E]">
            {" "}
            Verify your account
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Enter the verification code sent to you
          </p>
        </div>

        <form className="mt-2 space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <Label
              htmlFor="verificationCode"
              className="mb-1 block text-sm font-medium text-neutral-800"
            >
              {" "}
              Verification code
            </Label>
            <TextInput
              id="verificationCode"
              name="code"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="123456"
              value={formik.values.code}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  formik.setFieldValue("code", value);
                }
              }}
              onBlur={formik.handleBlur}
              required
              className="border-primary focus:ring-0 focus:outline-none focus:border-primary"
            />

            {formik.errors.code && formik.touched.code && (
              <p className="text-red-500 text-sm">{formik.errors.code}</p>
            )}
          </div>

          <div className="flex justify-between ">
            <p className="text-sm text-neutral-600">
              Did not receive the code?
              <span
                className="font-medium mx-1 text-[#BE968E] cursor-pointer"
                onClick={() => {
                  handleResendCode();
                }}
              >
                Resend code
              </span>
            </p>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#BE968E] hover:bg-[#BE968E]/80 focus:ring-[#BE968E]/30"
          >
            {isLoading ? <Loader width="5" height="5" /> : "submit"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

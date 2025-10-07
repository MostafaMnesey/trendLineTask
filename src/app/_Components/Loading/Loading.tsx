"use client";

export default function Loader({ width, height }: { width: string; height: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`w-${width} h-${height} border-4 border-[#F5EDEB] border-t-[#4A4A4A] rounded-full animate-spin`}
      ></div>
    </div>
  );
}
    
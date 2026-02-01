"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If JWT exists, go straight to admin dashboard
      router.push("/admin");
    } else {
      // Otherwise, go to login page
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1>Loading...</h1>
      <p>You will be redirected shortly.</p>
    </div>
  );
}

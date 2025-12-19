"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchMe())
      .unwrap()
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        router.replace("/login");
      });
  }, [dispatch, router]);

  // ⛔ JANGAN redirect di sini
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // tunggu useEffect redirect
  }

  return children;
}

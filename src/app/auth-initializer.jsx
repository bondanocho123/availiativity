"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
  const [minLoading, setMinLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    dispatch(fetchMe())
      .unwrap()
      .then(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(3000 - elapsed, 0);

        setTimeout(() => {
          setMinLoading(false);
        }, remaining);
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        router.replace("/login");
      });
  }, [dispatch, router]);

  // ⛔ JANGAN redirect di sini
  if ((loading || minLoading) && !isAuthenticated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="relative flex flex-col items-center space-y-8">
          {/* Logo Placeholder (ganti dengan logo platform Anda) */}
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl shadow-2xl animate-pulse" />

          {/* Spinner Elegan: Orbiting Dots Minimalist */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-l-blue-600 animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 border-r-green-600 animate-spin animation-delay-300" />
          </div>

          {/* Text Loading + Tagline */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground animate-pulse">Memuat Dashboard Afiliasi...</h2>
            <p className="text-muted-foreground max-w-md">
              Siapkan posting link produk, rack etalase pribadi, dan template kampanye sosmed Anda!
            </p>
          </div>

          {/* Progress Bar Subtle (opsional) */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full animate-progress" />
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // tunggu useEffect redirect
  }

  return children;
}

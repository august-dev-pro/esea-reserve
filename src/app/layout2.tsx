// app/layout.tsx
"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { initializeAuth } from "@/redux/slices/authSlice";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Utilisez usePathname pour obtenir le chemin actuel
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await store.dispatch(initializeAuth());
      setInitialized(true);
    };
    initialize();
  }, []);

  return (
    <Provider store={store}>
      <Header />
      {!initialized ? (
        <div>Loading...</div>
      ) : (
        <div
          className={`${
            pathname.includes("/admin/dashboard")
              ? ""
              : "pt-[101px] lg:pt-[65px]"
          }`}
        >
          {children}
        </div>
      )}
      {!pathname.includes("/admin/dashboard") && <Footer />}
    </Provider>
  );
}

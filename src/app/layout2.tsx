"use client";
import { useEffect, useState } from "react";
import { initializeAuth } from "@/redux/slices/authSlice";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function RootLayout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await store.dispatch(initializeAuth());
      setInitialized(true);
    };
    initialize();
  }, []);

  if (!initialized) {
    return (
      <Provider store={store}>
        <div className="">
          <Header />
          <div>Loading...</div>
          <Footer />
        </div>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}

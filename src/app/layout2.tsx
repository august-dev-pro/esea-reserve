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

  return (
    <Provider store={store}>
      <div>
        <Header />
        {/* Affiche "Loading..." uniquement si l'authentification n'est pas encore initialisée */}
        {!initialized ? <div>Loading...</div> : <div>{children}</div>}
        <Footer />
      </div>
    </Provider>
  );
}

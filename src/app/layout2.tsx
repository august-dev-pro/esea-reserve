"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function RootLayout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}

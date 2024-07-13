"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}> {children}</Provider>;
}

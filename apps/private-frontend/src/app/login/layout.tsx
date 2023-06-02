"use client";
import React from "react";
import useIsAuthenticated from "../../supabase/useIsAuthenticated";
import { redirect } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) redirect("/");
  return <div>{children}</div>;
}

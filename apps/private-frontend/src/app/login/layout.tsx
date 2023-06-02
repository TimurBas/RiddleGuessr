"use client";
import React from "react";
import useIsAuthenticated from "../../supabase/useIsAuthenticated";

export default function layout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();

  return <div>{children}</div>;
}

"use client";

import { useContext } from "react";
import { SupabaseContext } from "./supabase-provider";

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }
  return context;
};

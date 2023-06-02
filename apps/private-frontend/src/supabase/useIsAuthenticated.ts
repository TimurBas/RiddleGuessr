"use client";

import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";

export default function useIsAuthenticated() {
  const { supabase } = useSupabase();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const accessToken = session?.access_token || null;

      const isAuthenticated = accessToken !== undefined && accessToken !== null;
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthUser();
  }, []);
  return isAuthenticated;
}

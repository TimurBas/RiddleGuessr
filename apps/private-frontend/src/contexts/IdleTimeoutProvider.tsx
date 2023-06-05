"use client";

import { createContext, useState } from "react";
import { useSupabase } from "../supabase/useSupabase";
import IdleTimeout from "../hooks/useIdleTimeout";

export const IdleTimeoutContext = createContext(null);

export default function IdleTimeoutProvider({ children }) {
  const { supabase } = useSupabase();
  const [isIdle, setIsIdle] = useState(false);

  if (isIdle) {
    alert("you are idle");
    supabase.auth.signOut();
  }

  return (
    <IdleTimeoutContext.Provider value={null}>
      <IdleTimeout idleTime={10000} onIdle={() => setIsIdle(true)} />
      {children}
    </IdleTimeoutContext.Provider>
  );
}

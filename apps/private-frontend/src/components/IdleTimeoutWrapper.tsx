"use client";

import React, { FC, useState } from "react";
import { useSupabase } from "../supabase/useSupabase";
import IdleTimeout from "./IdleTimeout";

const IdleTimeoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { supabase } = useSupabase();
  const [isIdle, setIsIdle] = useState(false);

  if (isIdle) {
    alert("you are idle");
    supabase.auth.signOut();
  }
  return (
    <>
      <IdleTimeout idleTime={3600000} onIdle={() => setIsIdle(true)} />
      {children}
    </>
  );
};

export default IdleTimeoutWrapper;

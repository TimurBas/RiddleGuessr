"use client";

import { Button, Header } from "ui";
import { useSupabase } from "../supabase/useSupabase";
import { useState } from "react";
import IdleTimeout from "../hooks/useIdleTimeout";

export default function Page() {
  const { supabase } = useSupabase();

  const [isIdle, setIsIdle] = useState(false);

  if (isIdle) {
    alert("you are idle");
    supabase.auth.signOut();
  }

  return (
    <>
      <IdleTimeout idleTime={30000} onIdle={() => setIsIdle(true)} />
      <Header text="Webs" />
      <Button />
    </>
  );
}

"use client";

import { Button, Header } from "ui";
import { useSupabase } from "../supabase/useSupabase";
import { useState } from "react";
import IdleTimeout from "../components/IdleTimeout";

export default function Page() {
  const { supabase } = useSupabase();

  const [isIdle, setIsIdle] = useState(false);

  const handleIdle = () => {
    setIsIdle(true);
    // Perform the desired action when the user is idle
    // e.g., log out the user, display a timeout message, etc.
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  if (isIdle) {
    alert("you are idle");
    supabase.auth.signOut();
  }

  return (
    <>
      <IdleTimeout idleTime={30000} onIdle={handleIdle} />
      <Header text="Webs" />
      <Button />
      <button onClick={handleSignOut}>sign out</button>
    </>
  );
}

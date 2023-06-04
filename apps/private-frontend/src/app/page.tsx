"use client";

import { Button, Header } from "ui";
import { useSupabase } from "../supabase/useSupabase";

export default function Page() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <>
      <Header text="Webs" />
      <Button />
      <button onClick={handleSignOut}>sign out</button>
    </>
  );
}

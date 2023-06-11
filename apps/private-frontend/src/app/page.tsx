"use client";

import Link from "next/link";
import { Button, Header } from "ui";
import { useSupabase } from "../supabase/useSupabase";

export default function Page() {
  const { supabase } = useSupabase();
  return (
    <>
      <Header text="Webs" />
      <Button />
      <Link href={"/riddle"}>Click</Link>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        Log out
      </button>
    </>
  );
}

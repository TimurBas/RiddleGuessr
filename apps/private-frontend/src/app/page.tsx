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
        className="bg-slate-50"
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        <p className="text-slate-800">Log out</p>
      </button>
    </>
  );
}

"use client";

import { createContext, useEffect, useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "supa";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

export const SupabaseContext = createContext<SupabaseContext | undefined>(
  undefined
);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() =>
    createPagesBrowserClient({
      cookieOptions: {
        domain: "riddleguessr.com",
        maxAge: "3600",
        path: "/",
        sameSite: "None",
        secure: "secure",
      },
    })
  );
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      router.refresh();
    });

    console.log("HEJ");

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      <>{children}</>
    </SupabaseContext.Provider>
  );
}

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
        maxAge: "100000000",
        path: "/",
        sameSite: "Lax",
        secure: "secure",
      },
    })
  );
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

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

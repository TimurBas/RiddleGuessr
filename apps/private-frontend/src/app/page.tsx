"use client";

import { Button, Header } from "ui";
import useIsAuthenticated from "../supabase/useIsAuthenticated";

export default function Page() {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated)
    return (
      <>
        <p>FUCK YEA</p>
      </>
    );

  return (
    <>
      <Header text="Webs" />
      <Button />
    </>
  );
}

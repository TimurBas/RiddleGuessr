import { Button, Header } from "ui";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function Page() {
  const supabase = createServerComponentClient({ cookies });

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

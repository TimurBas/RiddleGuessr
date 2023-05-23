"use client";

import React, { FC } from "react";
import { useSupabase } from "../../supabase/useSupabase";
import useIsAuthenticated from "../../supabase/useIsAuthenticated";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

const LoginForm: FC = () => {
  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "timurbas1@hotmail.com",
      password: "sup3rs3cur3",
    });
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "timurbas1@hotmail.com",
      password: "sup3rs3cur3",
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <button className="text-white" onClick={handleLogin}>
        Login
      </button>
      <button className="text-white" onClick={handleSignUp}>
        SignUp
      </button>
      <button className="text-white" onClick={handleSignOut}>
        SignOut
      </button>
    </div>
  );
};

export default LoginForm;

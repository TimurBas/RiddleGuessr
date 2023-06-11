"use client";

import React, { useState } from "react";
import InputField from "ui/InputField";
import { useSupabase } from "../../supabase/useSupabase";

export default function Page() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [isLoginSucessful, setIsLoginSucessful] = useState(true);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await handleLogin();
    }
  };

  const handleLogin = async () => {
    const {
      error,
      data: { session },
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) setIsLoginSucessful(false);
  };

  return (
    <>
      <InputField
        value={email}
        setValue={setEmail}
        placeholder="name@example.com"
        type="email"
        onKeyDown={handleKeyDown}
      />
      <InputField
        value={password}
        setValue={setPassowrd}
        placeholder="*******"
        type="password"
        onKeyDown={handleKeyDown}
      />
      <button
        className="h-10 rounded-md bg-sky-500 px-4 font-medium text-white"
        onClick={handleLogin}
      >
        Continue
      </button>
      {!isLoginSucessful && <p className="text-red-600">Error</p>}
    </>
  );
}

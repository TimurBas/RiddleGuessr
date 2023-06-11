"use client";

import React, { FC, useState } from "react";
import InputField from "ui/InputField";
import { useSupabase } from "../../supabase/useSupabase";

const LoginForm: FC = () => {
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

  const handleGoogleLogin = async () => {
    const resolveRedirectUrl = () => {
      const env = process.env.NEXT_PUBLIC_VERCEL_ENV;

      if (env === "production")
        return `${process.env.PROD_PRIVATE_FRONTEND_URL}`;
      if (env === "preview")
        return `${process.env.STAGING_PRIVATE_FRONTEND_URL}`;
      return process.env.LOCAL_PRIVATE_FRONTEND_URL;
    };
    console.log(resolveRedirectUrl());
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://app.riddleguessr.com",
      },
    });

    console.log(error);
    console.log(data);
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
      <button
        className="h-10 rounded-md bg-sky-500 px-4 font-medium text-white"
        onClick={handleGoogleLogin}
      >
        Google login
      </button>
    </>
  );
};

export default LoginForm;

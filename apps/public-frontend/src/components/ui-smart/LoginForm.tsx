"use client";

import React, { FC, useState } from "react";
import InputField from "../ui/atomic/input/InputField";
import { useSupabase } from "../../supabase/useSupabase";
import { useRouter } from "next/navigation";
import { AuthRedirect } from "../../data/client/api";

const resolveRedirectUrl = () => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
  if (env === "production") return process.env.PROD_PRIVATE_FRONTEND_URL;
  if (env === "preview")
    return `https://private-frontend-git-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF.replaceAll(
      "/",
      "-"
    )}-timurbas.vercel.app`;
  return process.env.LOCAL_PRIVATE_FRONTEND_URL;
};

const LoginForm: FC = () => {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleLogin = async () => {
    const {
      error,
      data: { session },
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (session) await AuthRedirect();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-3xl font-semibold text-white">Create an account</h1>
      <h6 className="text-gray-400">
        Enter your email and password below to create your account
      </h6>
      <InputField
        value={email}
        setValue={setEmail}
        placeholder="name@example.com"
        type="email"
      />
      <InputField
        value={password}
        setValue={setPassowrd}
        placeholder="*******"
        type="password"
      />
      <button
        className="h-10 rounded-md bg-sky-500 px-4 font-medium text-white"
        onClick={handleLogin}
      >
        Continue
      </button>
    </div>
  );
};

export default LoginForm;

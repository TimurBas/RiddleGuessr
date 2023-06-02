"use client";

import React, { FC, useState } from "react";
import { useSupabase } from "../../supabase/useSupabase";
import InputField from "../ui/atomic/input/InputField";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

const LoginForm: FC = () => {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
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

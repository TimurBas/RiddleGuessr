"use client";

import React, { FC, useState } from "react";
import InputField from "../ui/atomic/input/InputField";
import { useSupabase } from "../../supabase/useSupabase";
import { AuthRedirect } from "../../data/client/api";
import { useRouter } from "next/navigation";

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

    console.log(error);
    // console.log(error?.status);
    // if (error?.status != 307) alert("You fucked up");

    // const isRedirected = await AuthRedirect();
    // console.log(isRedirected);
    if (session) router.push("http://localhost:3001");
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

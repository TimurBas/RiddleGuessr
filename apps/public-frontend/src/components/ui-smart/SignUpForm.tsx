"use client";

import React, { FC, useState } from "react";
import { useSupabase } from "../../supabase/useSupabase";
import InputField from "../ui/atomic/input/InputField";

const SignUpForm: FC = () => {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleSignUp = async () => {
    const {
      error,
      data: { user },
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "https://app.riddleguessr.com",
      },
    });

    console.log(user);
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
        onClick={handleSignUp}
      >
        Continue
      </button>
    </div>
  );
};

export default SignUpForm;

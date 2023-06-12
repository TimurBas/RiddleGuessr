"use client";

import { FC } from "react";
import SignUpForm from "ui/auth/sign-up/SignUpForm";
import { useSupabase } from "../../supabase/useSupabase";

const SignUp: FC = () => {
  const { supabase } = useSupabase();
  return <SignUpForm supabase={supabase} />;
};

export default SignUp;

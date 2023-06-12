"use client";

import React from "react";
import LoginSection from "ui/auth/login/LoginSection";
import { useSupabase } from "../../supabase/useSupabase";

const Login = () => {
  const { supabase } = useSupabase();
  return <LoginSection supabase={supabase} />;
};
export default Login;

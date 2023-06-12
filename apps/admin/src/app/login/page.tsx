"use client";

import React from "react";
import { useSupabase } from "../../supabase/useSupabase";
import LoginForm from "ui/auth/login/LoginForm";

const Login = () => {
  const { supabase } = useSupabase();
  return <LoginForm supabase={supabase} />;
};

export default Login;

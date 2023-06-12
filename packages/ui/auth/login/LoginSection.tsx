import { FC } from "react";
import { SupabaseClient } from "types";
import LoginForm from "ui/auth/login/LoginForm";

type Props = {
  supabase: SupabaseClient;
};

const LoginSection: FC<Props> = ({ supabase }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <h6 className="text-gray-400">
        Enter your email and password below to login to your account
      </h6>
      <LoginForm supabase={supabase} />
    </div>
  );
};

export default LoginSection;

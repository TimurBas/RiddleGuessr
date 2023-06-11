import { FC } from "react";
import { SupabaseClient } from "types";
import SignUpForm from "ui/auth/sign-up/SignUpForm";

type Props = {
  supabase: SupabaseClient;
};

const SignUp: FC<Props> = ({ supabase }) => {
  return <SignUpForm supabase={supabase} />;
};

export default SignUp;

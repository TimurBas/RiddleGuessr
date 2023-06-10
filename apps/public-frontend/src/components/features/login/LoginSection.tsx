import React, { FC } from "react";
import LoginForm from "../../ui-smart/LoginForm";

const LoginSection: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <h6 className="text-gray-400">
        Enter your email and password below to login to your account
      </h6>
      <LoginForm />
    </div>
  );
};

export default LoginSection;

"use client";

import React, { FC, useEffect } from "react";
import { resolveAdminBaseUrl } from "utils";

const CreateAdmin: FC = () => {
  useEffect(() => {
    const baseUrl = resolveAdminBaseUrl();
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fetchAdmin = async () => {
      const res = await fetch(`${baseUrl}/api/supabase/create-admin`, options);
      console.log(res.text());
      return res;
    };
    fetchAdmin();
  }, []);

  return <div>CreateAdmin</div>;
};

export default CreateAdmin;

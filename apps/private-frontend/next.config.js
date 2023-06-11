module.exports = {
  transpilePackages: ["ui"],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "czznftpbupwdynazsvoq.supabase.co",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://staging.riddleguessr.com/login",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, next-router-state-tree, next-url, rsc",
          },
        ],
      },
    ];
  },
};

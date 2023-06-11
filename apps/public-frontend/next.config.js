module.exports = {
  transpilePackages: ["ui"],
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/login",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value:
              "https://app.riddleguessr.com, https://staging-app.riddleguessr.com",
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

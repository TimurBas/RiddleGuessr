import "../styles/globals.css";

export const metadata = {
  title: "Project-1",
  description: "Project-1 Description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary`}>{children}</body>
    </html>
  );
}

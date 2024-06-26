import "../styles/globals.css";
import SupabaseProvider from "../supabase/supabase-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}

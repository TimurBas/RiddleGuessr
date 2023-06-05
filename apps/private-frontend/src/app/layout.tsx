import IdleTimeoutProvider from "../contexts/IdleTimeoutProvider";
import "../styles/globals.css";
import SupabaseProvider from "../supabase/supabase-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <IdleTimeoutProvider>{children}</IdleTimeoutProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

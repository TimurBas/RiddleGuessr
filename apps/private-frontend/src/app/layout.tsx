import IdleTimeoutWrapper from "../components/IdleTimeoutWrapper";
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
          <IdleTimeoutWrapper>{children}</IdleTimeoutWrapper>
        </SupabaseProvider>
      </body>
    </html>
  );
}

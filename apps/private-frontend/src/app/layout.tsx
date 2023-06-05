import "../styles/globals.css";
import IdleTimeoutWrapper from "../components/IdleTimeoutWrapper";
import SupabaseProvider from "../supabase/supabase-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <SupabaseProvider>
          <IdleTimeoutWrapper>{children}</IdleTimeoutWrapper>
        </SupabaseProvider>
      </body>
    </html>
  );
}

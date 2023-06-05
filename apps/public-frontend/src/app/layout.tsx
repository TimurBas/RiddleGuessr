import "../styles/globals.css";
import FooterSection from "../components/features/footer/FooterSection";
import HeaderSection from "../components/features/header/HeaderSection";
import TopBar from "../components/ui/atomic/top-bar/TopBar";
import SupabaseProvider from "../supabase/supasebase-provider";

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
      <body className="bg-primary">
        <TopBar />
        <div className="flex flex-col p-5">
          <HeaderSection />
        </div>
        <SupabaseProvider>{children}</SupabaseProvider>
        <FooterSection />
      </body>
    </html>
  );
}

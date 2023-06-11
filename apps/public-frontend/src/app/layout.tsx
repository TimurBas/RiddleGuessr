import "../styles/globals.css";
import FooterSection from "ui/footer/FooterSection";
import TopBar from "ui/atomic/TopBar";
import SupabaseProvider from "../supabase/supasebase-provider";
import MainHeader from "ui/header/MainHeader";
import HamburgerMenu from "../components/features/header/HamburgerMenu";
import NavigationLinks from "../components/features/header/NavigationLinks";

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
          <MainHeader
            children={
              <>
                <HamburgerMenu />
                <NavigationLinks />
              </>
            }
          />
        </div>
        <SupabaseProvider>{children}</SupabaseProvider>
        <FooterSection />
      </body>
    </html>
  );
}

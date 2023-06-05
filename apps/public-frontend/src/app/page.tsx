import HeroSection from "../components/features/hero/HeroSection";

export default function Home() {
  return (
    <>
      <div className="flex-col justify-between">
        <HeroSection />
        <HeroSection />
        <HeroSection />
      </div>
    </>
  );
}

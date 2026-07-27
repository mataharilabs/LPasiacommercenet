import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Services     from "@/components/Services";
import StatsBar     from "@/components/StatsBar";
import WhyUs        from "@/components/WhyUs";
import BusinessClub from "@/components/BusinessClub";
import Testimonials from "@/components/Testimonials";
import CTABanner    from "@/components/CTABanner";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsBar />
        <WhyUs />
        <BusinessClub />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

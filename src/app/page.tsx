import ContactCTA from "@/components/ContactCTA";
import FaqSection from "@/components/FaqSection";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <FaqSection/>
      <ContactCTA/>
      <Footer/>
    </main>
  );
}

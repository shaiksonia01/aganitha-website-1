import Hero from "@/components/hero/hero"
import Services from "@/components/services/services"
import BiopharmaSolutions from "@/components/content/solution-content"
import BiopharmaOfferings from "@/components/content/content"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <BiopharmaSolutions/>
      <BiopharmaOfferings />
      <Footer/>
    </main>
  )
}


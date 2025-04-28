import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      {/* Login modal is controlled via client-side state */}
    </main>
  )
}

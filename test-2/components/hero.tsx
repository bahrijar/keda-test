import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Left blue shape */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-[500px]">
        <div className="w-full h-full bg-gradient-to-br from-sky-300 to-blue-500 rounded-br-[40%]"></div>
      </div>

      {/* Right blue/purple shape */}
      <div className="absolute top-1/3 right-0 w-1/2 h-[500px] hidden md:block">
        <div className="w-full h-full bg-gradient-to-tl from-indigo-500 via-blue-500 to-sky-300 rounded-tl-[60%] opacity-80"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-indigo-400 rounded-full opacity-70"></div>
        <div className="absolute top-10 right-40 w-16 h-16 bg-blue-300 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]">
          <div className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Manage Your Business <span className="text-sky-500">Efficiently</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Simplify your operations with our comprehensive ERP solution designed specifically for startups and
              growing businesses.
            </p>
            <div className="mb-8">
              <blockquote className="italic text-gray-700 border-l-4 border-sky-400 pl-4 py-2">
                "Excepteur sint occaecat cupidatat non proident"
              </blockquote>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6">Get Started</Button>
              <Button variant="outline" className="border-sky-400 text-sky-500 hover:bg-sky-50 px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="ERP Dashboard Illustration"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoginModal from "./login-modal"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="text-xl font-bold text-sky-400">ERP</span>
            <span className="text-xl font-bold ml-1">Start</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="font-medium hover:text-sky-500 transition-colors">
              HOME
            </Link>
            <Link href="#about" className="font-medium hover:text-sky-500 transition-colors">
              ABOUT
            </Link>
            <Link href="#pricing" className="font-medium hover:text-sky-500 transition-colors">
              PRICING
            </Link>
            <Link href="#contact" className="font-medium hover:text-sky-500 transition-colors">
              CONTACT
            </Link>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-sky-400 text-sky-500 hover:bg-sky-50"
              onClick={() => setIsLoginOpen(true)}
            >
              LOGIN
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#"
                className="font-medium hover:text-sky-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="font-medium hover:text-sky-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="#pricing"
                className="font-medium hover:text-sky-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="#contact"
                className="font-medium hover:text-sky-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Button
                variant="outline"
                className="border-sky-400 text-sky-500 hover:bg-sky-50 w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsLoginOpen(true)
                }}
              >
                LOGIN
              </Button>
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}

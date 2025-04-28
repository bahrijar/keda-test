import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
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
            <p className="text-gray-400 mb-4">
              Empowering startups with efficient ERP solutions to manage inventory, track sales, and analyze profits.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Sales Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Profit Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                  AI Predictions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-sky-400 w-full"
              />
              <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-r-md transition-colors">
                <Mail size={20} />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ERPStart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

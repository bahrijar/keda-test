import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our ERP Solution</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive system designed to help startups track inventory, monitor sales, and analyze profits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="ERP System Features"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our ERP System?</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Inventory Management</h4>
                  <p className="text-gray-600">Track incoming and outgoing goods with ease and precision.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Profit Tracking</h4>
                  <p className="text-gray-600">Monitor your daily profits and analyze financial performance.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Data Analytics</h4>
                  <p className="text-gray-600">Visualize your sales data with intuitive charts and reports.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">AI-Powered Predictions</h4>
                  <p className="text-gray-600">Leverage artificial intelligence to forecast future earnings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

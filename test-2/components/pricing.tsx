"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Basic",
      tier: "TIER 1",
      description: "Perfect for small businesses just getting started",
      price: isAnnual ? 19 : 29,
      features: [
        "Record incoming goods",
        "Record outgoing goods",
        "Track daily profits",
        "Basic reporting",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Business",
      tier: "TIER 2",
      description: "Ideal for growing businesses with increasing needs",
      price: isAnnual ? 49 : 69,
      features: [
        "All Basic features",
        "Advanced inventory management",
        "Sales analytics with charts",
        "24/7 support",
        "Data backup",
        "Multiple user accounts",
      ],
      highlighted: true,
    },
    {
      name: "Entrepreneur",
      tier: "TIER 3",
      description: "For established businesses seeking advanced features",
      price: isAnnual ? 99 : 129,
      features: [
        "All Business features",
        "Export data to Excel",
        "AI revenue predictions",
        "Custom reporting",
        "API access",
        "Priority support",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs with our flexible pricing options.
          </p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? "font-semibold text-sky-600" : "text-gray-600"}`}>Monthly</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 ${
                isAnnual ? "bg-sky-500" : "bg-gray-200"
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? "font-semibold text-sky-600" : "text-gray-600"}`}>
              Annual <span className="text-xs text-green-500 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.highlighted ? "border-sky-500 shadow-lg shadow-sky-100" : "border-gray-200"}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="text-sm font-medium text-sky-500">{plan.tier}</div>
                <CardTitle className="text-2xl font-bold mt-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full py-6 ${
                    plan.highlighted ? "bg-sky-500 hover:bg-sky-600" : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

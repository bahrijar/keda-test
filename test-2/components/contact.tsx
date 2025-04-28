"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our ERP solution? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 py-6">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our team is here to help you with any questions or concerns about our ERP solution.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-sky-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@erpstart.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-sky-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-sky-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office</h4>
                    <p className="text-gray-600">
                      123 Business Avenue
                      <br />
                      Tech District, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-6 rounded-lg text-white">
              <h4 className="font-bold text-xl mb-2">Business Hours</h4>
              <p className="mb-4">We're available to assist you during these hours:</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Saturday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

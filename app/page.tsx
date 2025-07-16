"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Clock,
  FileText,
  Gavel,
  CreditCard,
  Ban,
  Library,
  FileSearch,
  Home,
  GraduationCap,
  Handshake,
  Landmark,
  XCircle,
  ClipboardList,
  HandCoins,
  Menu
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const services = [
    {
      title: "Closed accounts",
      icon: <Ban className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Repossessions",
      icon: <HandCoins className="h-10 w-10 text-red-400" />,
    },
    {
      title: "Collections",
      icon: <Library className="h-10 w-10 text-green-400" />,
    },
    {
      title: "Hard and soft credit inquiries",
      icon: <FileSearch className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Foreclosures",
      icon: <Home className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Student loan delinquencies",
      icon: <GraduationCap className="h-10 w-10 text-indigo-400" />,
    },
    {
      title: "Bankruptcies (including discharged debts)",
      icon: <Gavel className="h-10 w-10 text-pink-400" />,
    },
    {
      title: "Debt settlements",
      icon: <Handshake className="h-10 w-10 text-teal-400" />,
    },
    {
      title: "Court judgments",
      icon: <Landmark className="h-10 w-10 text-orange-400" />,
    },
    {
      title: "Defaulted accounts",
      icon: <XCircle className="h-10 w-10 text-red-500" />,
    },
    {
      title: "Tax liens",
      icon: <ClipboardList className="h-10 w-10 text-gray-400" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-lg sm:text-2xl font-bold text-white">The Arleen Credit Repair Program</h1>
            </div>
            {/* Desktop Buttons */}
            <div className="hidden sm:flex space-x-2 sm:space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 bg-transparent text-sm sm:text-base"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base">
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Hamburger Icon for Mobile */}
            <button
              className="sm:hidden p-2 rounded-md text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-black/80 border-t border-white/10 px-4 py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 bg-transparent w-full"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
            What is The Arleen Credit Repair Program?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            The Arleen Credit Repair Program is a professional credit restoration service designed to help individuals
            remove negative items from their credit reports and rebuild strong financial standing. The program
            specializes in identifying and disputing inaccurate, outdated, or unverifiable information that can hurt
            credit scores.
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Start Your Credit Journey Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Services Offered</h3>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
            The Arleen Credit Repair Program helps remove a wide range of derogatory marks, including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/40 border-white/20 text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <span className="text-sm sm:text-base">{service.title}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-black/40 border-white/20 text-white">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-300 text-center">
                In addition to removals, the program may offer personalized guidance on building and maintaining good
                credit, budgeting support, and monitoring progress.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Why Choose Our Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-black/40 border-white/20 text-white">
              <CardHeader className="text-center">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mb-4 mx-auto" />
                <CardTitle className="text-lg sm:text-xl">Fast Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center text-sm sm:text-base">
                  Many clients see improvements within 30-60 days depending on case complexity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 text-white">
              <CardHeader className="text-center">
                <Gavel className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mb-4 mx-auto" />
                <CardTitle className="text-lg sm:text-xl">Legal Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center text-sm sm:text-base">
                  Aggressive dispute strategies using legal knowledge and proven methods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 text-white">
              <CardHeader className="text-center">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mb-4 mx-auto" />
                <CardTitle className="text-lg sm:text-xl">Tailored Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center text-sm sm:text-base">
                  Personalized action plans designed to maximize success for your specific situation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 text-white">
              <CardHeader className="text-center">
                <CreditCard className="h-10 w-10 sm:h-12 sm:w-12 text-orange-400 mb-4 mx-auto" />
                <CardTitle className="text-lg sm:text-xl">Credit Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center text-sm sm:text-base">
                  Comprehensive approach to restore and maintain strong financial standing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Effectiveness Section */}
      <section className="py-12 sm:py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Effectiveness & Speed</h3>
          <Card className="bg-black/40 border-white/20 text-white">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                The Arleen Credit Repair Program is known for its fast and effective results. Many clients begin seeing
                improvements in their credit reports within 30 to 60 days, depending on the complexity of their case and
                the responsiveness of credit bureaus. The program uses aggressive dispute strategies, legal knowledge,
                and tailored action plans to maximize success and restore credit health efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-black/40 border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  "My credit score increased by 150 points in just 3 months! The team was professional and kept me
                  updated throughout the process."
                </p>
                <p className="font-semibold text-sm sm:text-base">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  "I was able to qualify for a mortgage after working with The Arleen Credit Repair Program. Highly
                  recommend!"
                </p>
                <p className="font-semibold text-sm sm:text-base">- Michael R.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/20 text-white">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  "Fast, reliable service. They removed 8 negative items from my credit report in under 2 months."
                </p>
                <p className="font-semibold text-sm sm:text-base">- Jennifer L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Improve Your Credit?</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join our program today and start seeing results in as little as 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto"
              >
                Already a Member? Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 The Arleen Credit Repair Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

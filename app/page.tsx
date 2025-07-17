"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
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
  Menu,
  Star,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: "Closed accounts",
      icon: <Ban className="h-8 w-8 text-red-400" />,
      description: "Remove closed accounts affecting your score",
    },
    {
      title: "Repossessions",
      icon: <HandCoins className="h-8 w-8 text-orange-400" />,
      description: "Dispute vehicle and property repossessions",
    },
    {
      title: "Collections",
      icon: <Library className="h-8 w-8 text-green-400" />,
      description: "Eliminate collection accounts from your report",
    },
    {
      title: "Hard inquiries",
      icon: <FileSearch className="h-8 w-8 text-blue-400" />,
      description: "Remove unauthorized credit inquiries",
    },
    {
      title: "Foreclosures",
      icon: <Home className="h-8 w-8 text-yellow-400" />,
      description: "Address foreclosure marks on your credit",
    },
    {
      title: "Student loans",
      icon: <GraduationCap className="h-8 w-8 text-indigo-400" />,
      description: "Handle student loan delinquencies",
    },
    {
      title: "Bankruptcies",
      icon: <Gavel className="h-8 w-8 text-pink-400" />,
      description: "Remove discharged bankruptcy debts",
    },
    {
      title: "Debt settlements",
      icon: <Handshake className="h-8 w-8 text-teal-400" />,
      description: "Clean up settled debt records",
    },
    {
      title: "Court judgments",
      icon: <Landmark className="h-8 w-8 text-purple-400" />,
      description: "Dispute court judgment entries",
    },
    {
      title: "Defaulted accounts",
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      description: "Remove defaulted account records",
    },
    {
      title: "Tax liens",
      icon: <ClipboardList className="h-8 w-8 text-gray-400" />,
      description: "Address tax lien issues",
    },
  ]

  const features = [
    {
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      title: "Fast Results",
      description: "See improvements in your credit score within 30-60 days with our proven strategies.",
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Legal Expertise",
      description: "Aggressive dispute strategies using legal knowledge and proven methods.",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-white" />,
      title: "Tailored Plans",
      description: "Personalized action plans designed to maximize success for your specific situation.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-white" />,
      title: "Guaranteed Results",
      description: "Comprehensive approach to restore and maintain strong financial standing.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "My credit score increased by 150 points in just 3 months! The team was professional and kept me updated throughout the process.",
      improvement: "+150 points",
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "I was able to qualify for a mortgage after working with The Arleen Credit Repair Program. Highly recommend!",
      improvement: "Mortgage Approved",
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Fast, reliable service. They removed 8 negative items from my credit report in under 2 months.",
      improvement: "8 Items Removed",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-black" />
                </div>
                <h1 className="text-xl font-bold text-white">Arleen Credit Repair</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Reviews
              </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black font-semibold">
                  Get Started Free
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
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
          <div className="sm:hidden bg-white/5 backdrop-blur-md border-t border-white/10 px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 w-full">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black w-full">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Credit Score
                </span>
                in 30 Days
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional credit restoration service that removes negative items and rebuilds your financial future.
                Join thousands who've improved their credit with our proven system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white border-2 border-white/20 hover:bg-white/10 px-8 py-4 text-lg rounded-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-white to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Sasha Yvonne</h3>
                    <p className="text-gray-300">Credit Repair Specialist</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Credit Score Boost</span>
                        <span className="text-white font-bold">+150 pts</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Items Removed</span>
                        <span className="text-white font-bold">8 items</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Success Rate</span>
                        <span className="text-white font-bold">94%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Why Choose Our Program?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven system has helped thousands of clients improve their credit scores and achieve their financial
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">What We Can Remove</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive credit repair service targets all types of negative items that may be hurting your
              credit score.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-xl text-gray-300">See how we've helped real clients transform their credit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border border-white/10">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-white">- {testimonial.name}</p>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/20">
                      {testimonial.improvement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Credit?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients and start your credit repair journey today. See results in as little as
            30 days with our proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-2 border-white/20 hover:bg-white/10 px-10 py-4 text-lg rounded-full"
              >
                Already a Member? Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white">Arleen Credit Repair</h4>
              </div>
              <p className="text-gray-400">
                Professional credit restoration service helping you achieve financial freedom.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Credit Report Analysis</li>
                <li>Dispute Management</li>
                <li>Score Monitoring</li>
                <li>Financial Coaching</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Success Stories</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
                <li>FCRA Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">© 2024 The Arleen Credit Repair Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

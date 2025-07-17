"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, LogOut, Menu, X } from "lucide-react"

interface Plan {
  id: string
  title: string
  subtitle: string
  price: string
  originalPrice?: string
  buttonText: string
  image: string
  isPaymentPlan?: boolean
}

export default function PlansPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    if (!authStatus) {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan)
    localStorage.setItem("selectedPlan", JSON.stringify(plan))
    router.push("/chat")
  }

  const plans: Plan[] = [
    {
      id: "super-sale",
      title: "Super Sale",
      subtitle: "Results in as little as 20-30 days!",
      price: "$399",
      originalPrice: "$599",
      buttonText: "Get Started!",
      image: "/images/plans/1.jpeg",
    },
    {
      id: "super-sale-payment",
      title: "Super Sale - Payment Plan",
      subtitle: "Results in as little as 15-30 days!",
      price: "$499",
      originalPrice: "$799",
      buttonText: "Get Started",
      image: "/images/plans/2.jpeg",
      isPaymentPlan: true,
    },
    {
      id: "vip-fast-track",
      title: "VIP Fast Track Program",
      subtitle: "Results in as little as 7-15 days!",
      price: "$750",
      originalPrice: "$2,000",
      buttonText: "Get Started!",
      image: "/images/plans/3.jpeg",
    },
    {
      id: "late-payment-guide",
      title: "The Late Payment Removal Guide",
      subtitle: "ONLY $100 FOR A LIMITED TIME",
      price: "$100",
      buttonText: "Download Now",
      image: "/images/plans/4.jpeg",
    },
    {
      id: "navy-federal-playback",
      title: "The Navy Federal Playback",
      subtitle: "Secret HAck to Become a Member + Tips & Tricks",
      price: "$150",
      buttonText: "Download Now",
      image: "/images/plans/5.jpeg",
    },
    {
      id: "instant-tradeline",
      title: "$2500 Instant Tradeline",
      subtitle: "Boost Your Credit 40-100 Points Fast",
      price: "$2500",
      originalPrice: "$3,000",
      buttonText: "I Need This!",
      image: "/images/plans/6.jpeg",
    },
    {
      id: "vip-current-clients",
      title: "VIP Fast Track Program",
      subtitle: "For Current Clients Only",
      price: "$500",
      buttonText: "Upgrade Me Please!",
      image: "/images/plans/2.jpeg",
    },
    {
      id: "consultation",
      title: "Schedule a Consultation",
      subtitle: "30 Min Call w/ Sasha Yvonne",
      price: "",
      buttonText: "Schedule a Call",
      image: "/images/plans/4.jpeg",
    },
    {
      id: "progress-call",
      title: "Progress Call - Current Clients Only",
      subtitle: "15 Min Call w/ Sasha Yvonne",
      price: "",
      buttonText: "Schedule a Call",
      image: "/images/plans/1.jpeg",
    },
  ]
  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold text-white">The Arleen Credit Repair Program</h1>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/chat">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent text-sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with Agent
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10 bg-transparent text-sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden text-white border-white/20 hover:bg-white/10 bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/chat" className="block">
              <Button
                variant="outline"
                className="w-full text-white border-white/20 hover:bg-white/10 bg-transparent text-sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with Agent
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full text-white border-white/20 hover:bg-white/10 bg-transparent text-sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        )}
      </nav>
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-80px)]">
        {/* Sidebar with Sasha's Profile - Fixed, non-scrollable */}
        <div className="lg:w-80 p-4 lg:p-6 mx-8 flex-shrink-0 lg:sticky lg:top-0 lg:h-full">
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-3xl lg:h-full">
            <CardContent className="p-6 text-center flex flex-col justify-center lg:h-full">
              <div className="mb-6">
                <Image
                  src="/images/plans/7.jpeg"
                  alt="Sasha Yvonne"
                  width={200}
                  height={200}
                  className="rounded-3xl mx-auto w-48 h-48 lg:w-full lg:h-auto object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-white">Sasha Yvonne</h2>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full p-3"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full p-3"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.84v.44a4.83 4.83 0 01-3.77 4.25A4.84 4.84 0 015.23 12a4.84 4.84 0 013.98 5.31V22h2.84v-4.69A4.84 4.84 0 0115.77 12a4.83 4.83 0 013.82-5.31zM12 13.96a1.96 1.96 0 110-3.92 1.96 1.96 0 010 3.92z" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Main Content - Plans Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer rounded-2xl"
                  onClick={() => handlePlanSelect(plan)}
                >
                  <CardContent className="p-6">
                    {/* Image and Text Row */}
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src={plan.image || "/placeholder.svg"}
                        alt={plan.title}
                        width={80}
                        height={80}
                        className="rounded-xl flex-shrink-0 w-20 h-20 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 leading-tight text-white">{plan.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 leading-tight">{plan.subtitle}</p>
                        {plan.price && (
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-white">{plan.price}</span>
                            {plan.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Button Row - Full Width */}
                    <Button
                      className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black text-base font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlanSelect(plan)
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

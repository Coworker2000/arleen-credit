"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Send, ArrowLeft, User, Bot } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function ChatPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const router = useRouter()
  const chatEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    if (!authStatus) {
      router.push("/login")
      return
    }
    setIsAuthenticated(true)

    // Get selected plan from localStorage
    const plan = localStorage.getItem("selectedPlan")
    if (plan) {
      setSelectedPlan(JSON.parse(plan))
    }

    // Initialize chat with welcome message
    const welcomeMessage: Message = {
      id: "1",
      text: plan
        ? `Hello! I see you're interested in our ${JSON.parse(plan).title}${
            JSON.parse(plan).price ? ` for ${JSON.parse(plan).price}` : ""
          }. I'm here to help you with pricing, payment options, and answer any questions you might have about this program. How can I assist you today?`
        : "Hello! Welcome to The Arleen Credit Repair Program. I'm here to help you choose the right plan and answer any questions about our services. How can I assist you today?",
      sender: "agent",
      timestamp: new Date(),
    }
    setMessages([welcomeMessage])
  }, [router])

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = generateAgentResponse(newMessage, selectedPlan)
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: agentResponse,
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAgentResponse = (userMessage: string, plan: any) => {
    const message = userMessage.toLowerCase()

    if (message.includes("price") || message.includes("cost") || message.includes("payment")) {
      if (plan) {
        if (plan.isPaymentPlan) {
          return `Great! You've selected our ${plan.title}. This payment plan option allows you to spread the ${plan.price} cost over several months, making it more manageable. We typically offer 3, 6, or 12-month payment plans. Would you like me to break down the monthly payment options for you?`
        }
        return `Perfect! The ${plan.title} is priced at ${plan.price}${
          plan.originalPrice ? ` (originally ${plan.originalPrice} - that's a huge savings!)` : ""
        }. This includes our comprehensive credit repair service with ${plan.subtitle.toLowerCase()}. We also offer payment plan options if you'd prefer to spread the cost. Would you like to proceed with this plan or hear about payment options?`
      }
      return "Our pricing varies depending on the program you choose. Since you're here, I can provide specific details about any plan that interests you. Which program would you like to know more about?"
    }

    if (message.includes("how long") || message.includes("time") || message.includes("results")) {
      if (plan && plan.subtitle.includes("7-15 days")) {
        return `Excellent choice! Our VIP Fast Track Program is our premium service that delivers results in as little as 7-15 days. This accelerated timeline is possible because we prioritize your case and work around the clock to dispute inaccuracies and optimize your credit profile. Most clients see significant improvements within the first two weeks!`
      } else if (plan && plan.subtitle.includes("30-45 days")) {
        return `Great question! Our Super Sale program typically shows results in 30-45 days. While this takes a bit longer than our VIP program, it's still much faster than trying to repair credit on your own, and you get the same proven methods at a fantastic price point.`
      }
      return "Our programs are designed for different timelines based on your needs and budget. Our VIP Fast Track shows results in 7-15 days, while our Super Sale program works within 30-45 days. Both use the same proven methods!"
    }

    if (message.includes("start") || message.includes("begin") || message.includes("proceed")) {
      if (plan) {
        return `Fantastic! I'm excited to get you started with the ${plan.title}. Here's what happens next: 1) We'll process your enrollment, 2) Conduct a comprehensive credit analysis within 24 hours, 3) Create your personalized dispute strategy, and 4) Begin working on your credit immediately. Are you ready to move forward with enrollment?`
      }
      return "I'm excited to help you get started! Once you select your preferred program, we can begin the enrollment process immediately. Which program interests you most?"
    }

    if (message.includes("difference") || message.includes("compare")) {
      return "Great question! The main differences are timeline and price: Our VIP Fast Track Program delivers results in 7-15 days for $897, while our Super Sale program works within 30-45 days for $297. Both use the same proven methods and include full credit analysis, dispute letters, and ongoing support. The VIP program just gets prioritized processing for faster results."
    }

    return `Thank you for your interest in ${
      plan ? `our ${plan.title}` : "our credit repair services"
    }! I'm here to answer any questions about pricing, timelines, our process, or help you get started. What would you like to know more about?`
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/plans">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white/20 hover:bg-white/10 bg-transparent text-xs sm:text-sm"
              >
                <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Back to Plans</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-white">Chat with Agent</h1>
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Selected Plan Info */}
          {selectedPlan && (
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Selected Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold mb-2 text-sm sm:text-base">{selectedPlan.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-2">{selectedPlan.subtitle}</p>
                  {selectedPlan.price && (
                    <div className="flex items-center space-x-2">
                      <span className="text-lg sm:text-xl font-bold text-white">{selectedPlan.price}</span>
                      {selectedPlan.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-400 line-through">
                          {selectedPlan.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          {/* Chat Interface */}
          <div className={`${selectedPlan ? "lg:col-span-2" : "lg:col-span-3"} order-1 lg:order-2`}>
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Bot className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Credit Repair Agent
                </CardTitle>
              </CardHeader>
              {/* Fixed height container for chat */}
              <div className="h-[500px] sm:h-[600px] flex flex-col">
                {/* Messages area - takes up remaining space */}
                <div className="flex-1 px-6 overflow-hidden">
                  <div
                    ref={messagesContainerRef}
                    className="h-full overflow-y-auto space-y-3 sm:space-y-4 pr-2"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
                    }}
                  >
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-lg ${
                            message.sender === "user" ? "bg-white/10 text-white" : "bg-gray-700 text-white"
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === "agent" && <Bot className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />}
                            {message.sender === "user" && <User className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />}
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm break-words">{message.text}</p>
                              <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 text-white p-2 sm:p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </div>
                {/* Fixed input area at bottom */}
                <div className="border-t border-white/10 p-4 bg-white/5">
                  <div className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-xs sm:text-sm"
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black px-3 sm:px-4 font-semibold"
                      disabled={!newMessage.trim()}
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

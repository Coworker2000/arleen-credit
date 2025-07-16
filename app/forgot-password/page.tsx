"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset email
    setTimeout(() => {
      setIsEmailSent(true)
      setIsLoading(false)
    }, 1000)
  }

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black/40 border-white/20 text-white">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Check Your Email</CardTitle>
            <CardDescription className="text-gray-300 text-sm sm:text-base">
              We've sent a password reset link to {email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Button
              onClick={() => setIsEmailSent(false)}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
            >
              Try Again
            </Button>
            <div className="text-center">
              <Link
                href="/login"
                className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/40 border-white/20 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription className="text-gray-300 text-sm sm:text-base">
            Enter your email address and we'll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/20 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>

          <div className="text-center">
            <Link
              href="/login"
              className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 inline-flex items-center"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

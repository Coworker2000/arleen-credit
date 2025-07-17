"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    ssn: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    currentCreditScore: "",
    goalCreditScore: "",
    monthlyIncome: "",
    employmentStatus: "",
    housingStatus: "",
    bankruptcyHistory: "",
    creditGoals: "",
    hearAboutUs: "",
    agreeToTerms: false,
    agreeToCredit: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    if (!formData.agreeToTerms || !formData.agreeToCredit) {
      alert("Please agree to all terms and conditions")
      return
    }
    setIsLoading(true)
    // Simulate registration process
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", formData.email)
      router.push("/plans")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-4 sm:py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-xl sm:text-2xl font-bold">Create Your Account</CardTitle>
            <CardDescription className="text-gray-300 text-sm sm:text-base">
              Join The Arleen Credit Repair Program and start improving your credit today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm sm:text-base text-gray-200">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm sm:text-base text-gray-200">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base text-gray-200">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base text-gray-200">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm sm:text-base text-gray-200">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ssn" className="text-sm sm:text-base text-gray-200">
                    Social Security Number (Last 4 digits) *
                  </Label>
                  <Input
                    id="ssn"
                    placeholder="1234"
                    maxLength={4}
                    value={formData.ssn}
                    onChange={(e) => handleInputChange("ssn", e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
              </div>
              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Address Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm sm:text-base text-gray-200">
                    Street Address *
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter your street address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm sm:text-base text-gray-200">
                      City *
                    </Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm sm:text-base text-gray-200">
                      State *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="AR">Arkansas</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="CO">Colorado</SelectItem>
                        <SelectItem value="CT">Connecticut</SelectItem>
                        <SelectItem value="DE">Delaware</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                        <SelectItem value="HI">Hawaii</SelectItem>
                        <SelectItem value="ID">Idaho</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        <SelectItem value="IN">Indiana</SelectItem>
                        <SelectItem value="IA">Iowa</SelectItem>
                        <SelectItem value="KS">Kansas</SelectItem>
                        <SelectItem value="KY">Kentucky</SelectItem>
                        <SelectItem value="LA">Louisiana</SelectItem>
                        <SelectItem value="ME">Maine</SelectItem>
                        <SelectItem value="MD">Maryland</SelectItem>
                        <SelectItem value="MA">Massachusetts</SelectItem>
                        <SelectItem value="MI">Michigan</SelectItem>
                        <SelectItem value="MN">Minnesota</SelectItem>
                        <SelectItem value="MS">Mississippi</SelectItem>
                        <SelectItem value="MO">Missouri</SelectItem>
                        <SelectItem value="MT">Montana</SelectItem>
                        <SelectItem value="NE">Nebraska</SelectItem>
                        <SelectItem value="NV">Nevada</SelectItem>
                        <SelectItem value="NH">New Hampshire</SelectItem>
                        <SelectItem value="NJ">New Jersey</SelectItem>
                        <SelectItem value="NM">New Mexico</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="NC">North Carolina</SelectItem>
                        <SelectItem value="ND">North Dakota</SelectItem>
                        <SelectItem value="OH">Ohio</SelectItem>
                        <SelectItem value="OK">Oklahoma</SelectItem>
                        <SelectItem value="OR">Oregon</SelectItem>
                        <SelectItem value="PA">Pennsylvania</SelectItem>
                        <SelectItem value="RI">Rhode Island</SelectItem>
                        <SelectItem value="SC">South Carolina</SelectItem>
                        <SelectItem value="SD">South Dakota</SelectItem>
                        <SelectItem value="TN">Tennessee</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="UT">Utah</SelectItem>
                        <SelectItem value="VT">Vermont</SelectItem>
                        <SelectItem value="VA">Virginia</SelectItem>
                        <SelectItem value="WA">Washington</SelectItem>
                        <SelectItem value="WV">West Virginia</SelectItem>
                        <SelectItem value="WI">Wisconsin</SelectItem>
                        <SelectItem value="WY">Wyoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-sm sm:text-base text-gray-200">
                      ZIP Code *
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder="12345"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
              {/* Account Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Account Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm sm:text-base text-gray-200">
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 pr-10 text-sm sm:text-base"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm sm:text-base text-gray-200">
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 pr-10 text-sm sm:text-base"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Financial Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                  Financial Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentCreditScore" className="text-sm sm:text-base text-gray-200">
                      Current Credit Score Range
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("currentCreditScore", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        <SelectItem value="below-500">Below 500</SelectItem>
                        <SelectItem value="500-549">500-549</SelectItem>
                        <SelectItem value="550-599">550-599</SelectItem>
                        <SelectItem value="600-649">600-649</SelectItem>
                        <SelectItem value="650-699">650-699</SelectItem>
                        <SelectItem value="700-749">700-749</SelectItem>
                        <SelectItem value="750-799">750-799</SelectItem>
                        <SelectItem value="800-850">800-850</SelectItem>
                        <SelectItem value="unknown">I don't know</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goalCreditScore" className="text-sm sm:text-base text-gray-200">
                      Goal Credit Score
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("goalCreditScore", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                        <SelectValue placeholder="Select goal" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        <SelectItem value="600+">600+ (Fair)</SelectItem>
                        <SelectItem value="650+">650+ (Good)</SelectItem>
                        <SelectItem value="700+">700+ (Very Good)</SelectItem>
                        <SelectItem value="750+">750+ (Excellent)</SelectItem>
                        <SelectItem value="800+">800+ (Exceptional)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome" className="text-sm sm:text-base text-gray-200">
                      Monthly Income
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("monthlyIncome", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        <SelectItem value="under-2000">Under $2,000</SelectItem>
                        <SelectItem value="2000-3999">$2,000 - $3,999</SelectItem>
                        <SelectItem value="4000-5999">$4,000 - $5,999</SelectItem>
                        <SelectItem value="6000-7999">$6,000 - $7,999</SelectItem>
                        <SelectItem value="8000-9999">$8,000 - $9,999</SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employmentStatus" className="text-sm sm:text-base text-gray-200">
                      Employment Status
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("employmentStatus", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 text-white border-gray-700">
                        <SelectItem value="employed-full">Employed Full-time</SelectItem>
                        <SelectItem value="employed-part">Employed Part-time</SelectItem>
                        <SelectItem value="self-employed">Self-employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="housingStatus" className="text-sm sm:text-base text-gray-200">
                    Housing Status
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("housingStatus", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                      <SelectValue placeholder="Select housing status" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-gray-700">
                      <SelectItem value="own">Own</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="live-with-family">Live with family/friends</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankruptcyHistory" className="text-sm sm:text-base text-gray-200">
                    Have you ever filed for bankruptcy?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("bankruptcyHistory", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-gray-700">
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes-chapter7">Yes - Chapter 7</SelectItem>
                      <SelectItem value="yes-chapter13">Yes - Chapter 13</SelectItem>
                      <SelectItem value="yes-other">Yes - Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="creditGoals" className="text-sm sm:text-base text-gray-200">
                    What are your primary credit goals?
                  </Label>
                  <Textarea
                    id="creditGoals"
                    placeholder="e.g., Buy a house, get a car loan, improve credit score..."
                    value={formData.creditGoals}
                    onChange={(e) => handleInputChange("creditGoals", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 text-sm sm:text-base min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hearAboutUs" className="text-sm sm:text-base text-gray-200">
                    How did you hear about us?
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white text-sm sm:text-base">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-gray-700">
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Friend/Family Referral</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed text-gray-300">
                    I agree to the{" "}
                    <Link href="/terms" className="text-white hover:text-gray-300">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-white hover:text-gray-300">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="credit"
                    checked={formData.agreeToCredit}
                    onCheckedChange={(checked) => handleInputChange("agreeToCredit", checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <Label htmlFor="credit" className="text-xs sm:text-sm leading-relaxed text-gray-300">
                    I authorize The Arleen Credit Repair Program to access my credit reports and work on my behalf to
                    improve my credit profile.
                  </Label>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-black text-sm sm:text-base py-3 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
            <div className="text-center text-xs sm:text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-white hover:text-gray-300">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Zap, Shield, BarChart, Share2, Star } from 'lucide-react'

const referralAppData = {
  title: "Referral Program System",
  description:
    "Empower your business with a dynamic Referral System that rewards customers for sharing and helps you grow organically through trust and loyalty.",
  keyFeatures: [
    { title: "Customizable Referral Program", description: "Design and configure referral programs that align with your brand’s goals." },
    { title: "Automated Rewards Management", description: "Easily track referrals and distribute rewards without manual effort." },
    { title: "Detailed Analytics", description: "Access data-driven insights to measure referral success and optimize strategies." },
    { title: "Multi-Platform Compatibility", description: "Integrate seamlessly with your website, app, or other platforms." },
    { title: "Flexible Sharing Options", description: "Allow users to share referral links across multiple channels and social media." },
    { title: "Tiered Incentives", description: "Encourage repeated sharing through tier-based or milestone rewards." },
    { title: "Anti-Fraud Mechanisms", description: "Ensure fair play and prevent misuse with built-in fraud detection tools." },
  ],
  benefits: [
    { title: "Increase Customer Acquisition", description: "Leverage referrals to attract high-quality new customers at a low cost." },
    { title: "Boost Customer Loyalty", description: "Encourage repeat business with meaningful and transparent reward systems." },
    { title: "Enhance Engagement", description: "Turn customers into advocates and grow your brand community." },
    { title: "Maximize Revenue", description: "Drive consistent growth through a well-managed referral pipeline." },
  ],
  useCases: [
    { title: "Small Businesses", description: "Grow your customer base using authentic, word-of-mouth marketing." },
    { title: "SaaS & Subscription Services", description: "Incentivize users to invite others and expand your product reach." },
    { title: "E-Commerce Stores", description: "Increase sales by rewarding customers who bring in new buyers." },
  ],
  whyChooseUs: [
    "Simple setup and management—no technical skills needed.",
    "Fully scalable for startups and enterprises alike.",
    "Dedicated support to help you succeed at every step.",
  ],
}

const FeatureIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    'Customizable Referral Program': <Zap className="h-8 w-8 text-yellow-400" />,
    'Automated Rewards Management': <Shield className="h-8 w-8 text-green-400" />,
    'Detailed Analytics': <BarChart className="h-8 w-8 text-blue-400" />,
    'Multi-Platform Compatibility': <Share2 className="h-8 w-8 text-purple-400" />,
    'Flexible Sharing Options': <Users className="h-8 w-8 text-indigo-400" />,
    'Tiered Incentives': <TrendingUp className="h-8 w-8 text-orange-400" />,
    'Anti-Fraud Mechanisms': <Shield className="h-8 w-8 text-red-400" />,
  }
  return icons[name] || <CheckCircle className="h-8 w-8 text-gray-400" />
}

export default function ReferralSystem() {
  const { title, description, keyFeatures, benefits, useCases, whyChooseUs } = referralAppData
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Top Tabs */}
          <TabsList className="flex justify-center gap-4 mb-12 bg-blue-100 p-2 rounded-full shadow-inner">
            <TabsTrigger
              value="overview"
              className="rounded-full px-6 py-2 text-sm md:text-base font-semibold text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="rounded-full px-6 py-2 text-sm md:text-base font-semibold text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
            >
              Details
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview">
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 text-white rounded-3xl shadow-lg overflow-hidden">
              {/* Left Text Section */}
              <div className="md:w-1/2 space-y-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Join our <br />
                  <span className="text-yellow-300">Referral Program</span>
                </h1>
                <p className="text-lg text-blue-100 max-w-md">
                  Earn rewards for sharing and help grow your community by spreading opportunities.
                </p>
                <Button
                  onClick={() => setActiveTab("details")}
                  className="bg-white text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>

              {/* Right Image Section */}
              <div className="md:w-1/2 relative mt-10 md:mt-0">
                <div
                  className="w-full h-80 md:h-96 bg-center bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: "url('/referral12.jpg')", // ✅ your image
                  }}
                ></div>
              </div>
            </section>
          </TabsContent>

          {/* DETAILS TAB */}
          <TabsContent value="details">
            <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-700 text-white py-20 px-4 rounded-xl shadow-lg">
              <div className="max-w-6xl mx-auto animate-fadeIn">
                <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-200">
                  {title}
                </h1>
                <p className="text-2xl text-center max-w-3xl mx-auto text-blue-100 mb-10">
                  {description}
                </p>

                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-2">
                    {['features', 'benefits', 'useCases', 'whyUs'].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-indigo-600 transition-all duration-300"
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Features */}
                  <TabsContent value="features">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {keyFeatures.map((feature, index) => (
                        <Card key={index} className="bg-white bg-opacity-90 border-none hover:bg-opacity-100 transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                              <FeatureIcon name={feature.title} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{feature.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Benefits */}
                  <TabsContent value="benefits">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-white bg-opacity-90 border-none hover:bg-opacity-100 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="flex items-center text-xl font-semibold">
                              <Star className="mr-2 h-6 w-6 text-yellow-400" />
                              {benefit.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{benefit.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Use Cases */}
                  <TabsContent value="useCases">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {useCases.map((useCase, index) => (
                        <Card key={index} className="bg-white bg-opacity-90 border-none hover:bg-opacity-100 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="flex items-center text-xl font-semibold">
                              <Users className="mr-2 h-6 w-6 text-blue-400" />
                              {useCase.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{useCase.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Why Choose Us */}
                  <TabsContent value="whyUs">
                    <Card className="bg-white bg-opacity-90 border-none">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">Why Choose Our Referral System?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {whyChooseUs.map((reason, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

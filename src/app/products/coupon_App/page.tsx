'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, Gift, BarChart, Send, Star, Settings, Zap, TrendingUp, Shield } from 'lucide-react'

// --- ICONS for features ---
const CouponFeatureIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    'Custom Coupon Campaigns': <Gift className="h-8 w-8 text-blue-400" />,
    'Coupon Tracking & Analytics': <BarChart className="h-8 w-8 text-cyan-400" />,
    'Automated Distribution': <Send className="h-8 w-8 text-sky-400" />,
    'Customer Rewards & Incentives': <Star className="h-8 w-8 text-yellow-400" />,
    'POS & CRM Integrations': <Settings className="h-8 w-8 text-indigo-400" />,
    'Campaign Management Dashboard': <Zap className="h-8 w-8 text-blue-500" />,
    'Advanced Security': <Shield className="h-8 w-8 text-teal-400" />,
    'Performance Optimization': <TrendingUp className="h-8 w-8 text-blue-300" />,
  }
  return icons[name] || <CheckCircle className="h-8 w-8 text-gray-400" />
}

// --- DATA ---
const couponAppData = {
  title: "CouponPro Solutions",
  description:
    "Design, manage, and track powerful coupon campaigns with ease. Our platform helps businesses drive sales, improve customer loyalty, and increase brand visibility with real-time analytics and seamless integrations.",
  keyFeatures: [
    { title: "Custom Coupon Campaigns", description: "Easily design and manage unique coupon campaigns tailored to your business objectives." },
    { title: "Coupon Tracking & Analytics", description: "Get visibility into redemptions, usage patterns, and ROI with advanced analytics." },
    { title: "Automated Distribution", description: "Automatically issue coupons via email, SMS, or app notifications to reach customers quickly." },
    { title: "Customer Rewards & Incentives", description: "Encourage engagement with discounts, cashbacks, or loyalty rewards." },
    { title: "POS & CRM Integrations", description: "Connect seamlessly with your systems for streamlined coupon management." },
    { title: "Campaign Management Dashboard", description: "Control, optimize, and track all coupon campaigns from one dashboard." },
  ],
  benefits: [
    { title: "Boost Sales", description: "Drive more purchases with targeted coupons and personalized offers." },
    { title: "Increase Loyalty", description: "Retain customers through meaningful and rewarding campaigns." },
    { title: "Gain Insights", description: "Optimize your marketing strategies with data-driven analytics." },
    { title: "Save Time", description: "Automate distribution to save time and improve efficiency." },
    { title: "Enhance Visibility", description: "Boost brand presence through consistent coupon campaigns." },
  ],
  whyChooseUs: [
    "Comprehensive tracking and analytics for better decision-making.",
    "Seamless integration with POS and CRM systems.",
    "Automated distribution saves time and reduces errors.",
    "Boost loyalty, sales, and engagement effortlessly.",
  ],
}

export default function CouponApp() {
  const { title, description, keyFeatures, benefits, whyChooseUs } = couponAppData
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* === Top Tabs === */}
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

          {/* === OVERVIEW === */}
          <TabsContent value="overview">
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white rounded-3xl shadow-lg overflow-hidden">
              {/* Left Text Section */}
              <div className="md:w-1/2 space-y-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Explore our <br />
                  <span className="text-cyan-300">Coupon Program</span>
                </h1>
                <p className="text-lg text-blue-100 max-w-md">
                  Create engaging, personalized coupon campaigns that drive sales and reward your loyal customers.
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
                    backgroundImage: "url('/coupon.jpg')",
                  }}
                ></div>
              </div>
            </section>
          </TabsContent>

          {/* === DETAILS === */}
          <TabsContent value="details">
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white py-20 px-4 rounded-xl shadow-lg">
              <div className="max-w-6xl mx-auto animate-fadeIn">
                <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                  {title}
                </h1>
                <p className="text-2xl text-center max-w-3xl mx-auto text-blue-100 mb-10">
                  {description}
                </p>

                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-2">
                    {['features', 'benefits', 'whyUs'].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 transition-all duration-300"
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* === FEATURES === */}
                  <TabsContent value="features">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {keyFeatures.map((feature, index) => (
                        <Card
                          key={index}
                          className="bg-white bg-opacity-90 border-none hover:bg-opacity-100 transition-all duration-300"
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl font-semibold text-blue-700">{feature.title}</CardTitle>
                              <CouponFeatureIcon name={feature.title} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-700">{feature.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* === BENEFITS === */}
                  <TabsContent value="benefits">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <Card
                          key={index}
                          className="bg-white bg-opacity-90 border-none hover:bg-opacity-100 transition-all duration-300"
                        >
                          <CardHeader>
                            <CardTitle className="flex items-center text-xl font-semibold text-blue-700">
                              <Star className="mr-2 h-6 w-6 text-cyan-400" />
                              {benefit.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-700">{benefit.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* === WHY US === */}
                  <TabsContent value="whyUs">
                    <Card className="bg-white bg-opacity-90 border-none">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-blue-700">Why Choose CouponPro?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {whyChooseUs.map((reason, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="mr-2 h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{reason}</span>
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

'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Star, Award, ThumbsUp } from "lucide-react"
import { useState } from "react"

// --- ICONS ---
const CommunityFeatureIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    "Satisfaction Guaranteed": <Star className="h-8 w-8 text-yellow-400" />,
    "Quality Assurance": <CheckCircle className="h-8 w-8 text-green-400" />,
    "Top-Rated Personnel": <Award className="h-8 w-8 text-blue-500" />,
    "Secure Transactions": <Shield className="h-8 w-8 text-purple-400" />,
  }
  return icons[name] || <ThumbsUp className="h-8 w-8 text-gray-400" />
}

// --- DATA ---
const communityAppData = {
  title: "Community Connect",
  description:
    "Our Community App ensures a reliable, engaging, and safe environment for members to connect, collaborate, and grow together.",
  keyFeatures: [
    {
      title: "Satisfaction Guaranteed",
      description:
        "If you're not happy with the service, we'll make it right or refund your money.",
    },
    {
      title: "Quality Assurance",
      description:
        "Our team regularly checks the quality of work to ensure high standards.",
    },
    {
      title: "Top-Rated Personnel",
      description:
        "We only work with the best-rated service providers in each category.",
    },
    {
      title: "Secure Transactions",
      description:
        "Your payments are secure and only released when you're satisfied with the work.",
    },
  ],
}

export default function CommunityApp() {
  const { title, description, keyFeatures } = communityAppData
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* === Tabs === */}
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
                  Welcome to our <br />
                  <span className="text-cyan-300">Community App</span>
                </h1>
                <p className="text-lg text-blue-100 max-w-md">
                  Build trust and connect with verified members through quality-driven interactions and secure services.
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
                    backgroundImage: "url('/community.jpg')", // <-- Replace with your image file name
                  }}
                ></div>
              </div>
            </section>
          </TabsContent>

          {/* === DETAILS === */}
          <TabsContent value="details">
            <div className="min-h-screen bg-blue-50 text-gray-800 py-20 px-4 rounded-xl shadow-inner">
              <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Quality Guarantee</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We’re committed to maintaining high-quality standards to ensure satisfaction and trust within our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CommunityFeatureIcon name={feature.title} />
                        <CardTitle className="text-lg font-semibold text-blue-800">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

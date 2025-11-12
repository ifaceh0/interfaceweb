'use client'

import Link from 'next/link'
import { ArrowRight, Users, Gift, Zap } from 'lucide-react'

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">Interface Hub-products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our innovative software solutions designed to empower your business and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Reusable Card Component */}
          {[
            {
              title: 'Referral Hub',
              desc: 'Boost your growth with our advanced referral marketing solution.',
              icon: <Gift className="w-12 h-12 text-yellow-300 mb-4" />,
              img: '/referral1.jpg',
              learn: '/products/referral_app',
            },
            {
              title: 'Coupon Hub',
              desc: 'Create and manage digital coupons to attract and retain customers effortlessly.',
              icon: <Gift className="w-12 h-12 text-pink-300 mb-4" />,
              img: '/Discount-Coupons.jpg',
              learn: '/products/coupon_App',
            },
            {
              title: 'Loyalty Hub',
              desc: 'Reward your customers and build long-lasting relationships with our loyalty program.',
              icon: <Users className="w-12 h-12 text-blue-300 mb-4" />,
              img: '/loyalty1.jpg',
              learn: '/products/loyalty_app',
            },
            {
              title: 'Community Hub',
              desc: 'Build and nurture your community with our powerful engagement platform.',
              icon: <Users className="w-12 h-12 text-purple-300 mb-4" />,
              img: '/community1.jpg',
              learn: '/products/community_app',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Background image with blur */}
              <div
                className="absolute inset-0 bg-center bg-cover blur-sm group-hover:blur-md transition-all duration-500"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>

              {/* Foreground content */}
              <div className="relative p-8 text-white z-10">
                {card.icon}
                <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                <p className="text-gray-200 mb-6">{card.desc}</p>
                <div className="flex gap-4">
                  <Link
                    href={card.learn}
                    className="inline-flex items-center bg-white text-blue-700 font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition"
                  >
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => window.open('https://referal-couponcode-frontend.vercel.app/', '_blank')}
                    className="inline-flex items-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose ifaceh Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose ifaceh?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovative Solutions</h3>
              <p className="text-gray-600">
                Cutting-edge technology to meet your evolving business needs.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">User-Friendly</h3>
              <p className="text-gray-600">
                Intuitive interfaces ensuring smooth adoption across your organization.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scalable</h3>
              <p className="text-gray-600">
                Solutions that grow with your business, from startups to enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

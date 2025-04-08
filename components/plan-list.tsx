"use client"

import { useState } from "react"
import { Check, Server, Cpu, HardDrive, Wifi, Globe } from "lucide-react"
import type { Plan } from "@/lib/blesta-api"
import { redirectToBlesta } from "@/lib/blesta-api"

interface PlanListProps {
  plans: Plan[]
}

export function PlanList({ plans }: PlanListProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  const handlePurchase = (planId: string) => {
    redirectToBlesta(planId)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="glass p-1 rounded-full">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billingCycle === "monthly" ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white" : "text-white"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billingCycle === "annually" ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white" : "text-white"
            }`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`glass-card rounded-xl overflow-hidden ${
              plan.popular ? "border-amber-400/50 ring-2 ring-amber-400/20" : ""
            }`}
          >
            {plan.popular && (
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/70 mb-4">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold text-white">
                    $
                    {billingCycle === "monthly"
                      ? plan.price.monthly.toFixed(2)
                      : plan.price.annually
                        ? (plan.price.annually / 12).toFixed(2)
                        : plan.price.monthly.toFixed(2)}
                  </span>
                  <span className="text-white/70 ml-1 mb-1">/mo</span>
                </div>
                {billingCycle === "annually" && plan.price.annually && (
                  <div className="text-amber-300 text-sm mt-1">
                    ${plan.price.annually.toFixed(2)} billed annually
                    <span className="ml-1 text-green-400">
                      (Save ${(plan.price.monthly * 12 - plan.price.annually).toFixed(2)})
                    </span>
                  </div>
                )}
              </div>

              {plan.specs && (
                <div className="glass p-4 rounded-lg mb-6 grid grid-cols-2 gap-3">
                  {plan.specs.cpu && (
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 text-amber-300 mr-2" />
                      <span className="text-white text-sm">{plan.specs.cpu}</span>
                    </div>
                  )}
                  {plan.specs.ram && (
                    <div className="flex items-center">
                      <Server className="h-4 w-4 text-amber-300 mr-2" />
                      <span className="text-white text-sm">{plan.specs.ram}</span>
                    </div>
                  )}
                  {plan.specs.storage && (
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-amber-300 mr-2" />
                      <span className="text-white text-sm">{plan.specs.storage}</span>
                    </div>
                  )}
                  {plan.specs.bandwidth && (
                    <div className="flex items-center">
                      <Wifi className="h-4 w-4 text-amber-300 mr-2" />
                      <span className="text-white text-sm">{plan.specs.bandwidth}</span>
                    </div>
                  )}
                  {plan.specs.players && (
                    <div className="flex items-center col-span-2">
                      <div className="h-4 w-4 text-amber-300 mr-2">👥</div>
                      <span className="text-white text-sm">{plan.specs.players}</span>
                    </div>
                  )}
                  {plan.specs.websites && (
                    <div className="flex items-center col-span-2">
                      <Globe className="h-4 w-4 text-amber-300 mr-2" />
                      <span className="text-white text-sm">{plan.specs.websites} Website(s)</span>
                    </div>
                  )}
                </div>
              )}

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-amber-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(plan.id)}
                className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700"
                    : "glass-button hover:text-amber-300"
                }`}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

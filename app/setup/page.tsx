"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Setup() {
  const [channelUrl, setChannelUrl] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = ["Fetching channel...", "Extracting content...", "Creating embeddings...", "Ready!"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!channelUrl) return

    setIsProcessing(true)

    // Simulate processing steps
    let step = 0
    const interval = setInterval(() => {
      if (step < steps.length - 1) {
        step++
        setCurrentStep(step)
      } else {
        clearInterval(interval)
        // Redirect to generate page after completion
        window.location.href = "/options"
      }
    }, 1500)
  }

  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Setup</h1>

        {!isProcessing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="channel-url" className="block mb-2 font-bold">
                Are.na Channel URL
              </label>
              <input
                id="channel-url"
                type="text"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                placeholder="https://are.na/username/channel-name"
                className="w-full border border-black p-3"
                required
              />
            </div>

            <button type="submit" className="border border-black px-6 py-3 w-full">
              Sync Channel
            </button>

            <div className="pt-6 text-center">
              <Link href="/options?demo=true" className="underline">
                Try with sample: r-startups-founder-mode
              </Link>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="border border-black p-6">
              {steps.map((step, index) => (
                <div key={index} className="py-2">
                  {index === currentStep ? (
                    <span className="font-bold">{step}</span>
                  ) : index < currentStep ? (
                    <span className="line-through">{step}</span>
                  ) : (
                    <span className="text-gray-400">{step}</span>
                  )}
                </div>
              ))}
            </div>

            {currentStep === steps.length - 1 && (
              <Link href="/generate">
                <button className="border border-black px-6 py-3 w-full mt-6">Continue to Generate</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

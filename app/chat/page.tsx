"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function Chat() {
  const [chatMode, setChatMode] = useState<"text" | "avatar">("text")
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string; sources?: Array<{ text: string; url: string }> }>
  >([
    {
      role: "system",
      content: "Welcome. I'm Airena, your intelligence agent powered by your Are.na channel. Ask me anything.",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content: "Based on your Are.na channel, I found several relevant connections to your question.",
          sources: [
            { text: "Design Systems for the Age of AI", url: "https://are.na/block/12345678" },
            { text: "Patterns of Emergence", url: "https://are.na/block/87654321" },
          ],
        },
        {
          content: "Your channel contains multiple blocks related to this topic. The key insight seems to be...",
          sources: [
            { text: "The Future of Design", url: "https://are.na/block/23456789" },
            { text: "AI and Creativity", url: "https://are.na/block/98765432" },
          ],
        },
        {
          content: "Analyzing your curated content, I can see a pattern emerging around this subject.",
          sources: [{ text: "Emergent Behaviors in Systems", url: "https://are.na/block/34567890" }],
        },
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: randomResponse.content + " Would you like me to elaborate on any specific aspect?",
          sources: randomResponse.sources,
        },
      ])
      setIsTyping(false)
    }, 2000)
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input logic would go here
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  const suggestedQuestions = [
    "What are the key themes in my channel?",
    "Summarize the most important insights",
    "What trends are emerging?",
    "How do these concepts connect?",
    "What are the contradictions in my channel?",
  ]

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex">
            <button
              onClick={() => setChatMode("text")}
              className={`border border-black px-4 py-2 mr-2 ${
                chatMode === "text" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Text Chat
            </button>
            <button
              onClick={() => setChatMode("avatar")}
              className={`border border-black px-4 py-2 ${
                chatMode === "avatar" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Avatar Chat
            </button>
          </div>
          <div className="flex gap-4">
            <Link href="/options">
              <button className="border border-black px-4 py-2">Back</button>
            </Link>
            <Link href="/generate">
              <button className="border border-black px-4 py-2">Switch to Generate</button>
            </Link>
          </div>
        </div>

        {chatMode === "text" ? (
          <>
            <div className="border border-black mb-6">
              <div className="h-[60vh] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : ""}`}>
                      <div
                        className={`inline-block p-3 border border-black max-w-[80%] ${
                          message.role === "user" ? "" : "bg-gray-100"
                        }`}
                      >
                        <div>{message.content}</div>

                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-black text-sm">
                            <div className="font-bold mb-1">Sources:</div>
                            <ul className="space-y-1">
                              {message.sources.map((source, i) => (
                                <li key={i}>
                                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">
                                    {source.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="mb-4">
                      <div className="inline-block p-3 border border-black bg-gray-100">...</div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="border-t border-black p-4 flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your are.na channel..."
                    className="flex-1 border border-black p-2"
                  />
                  <button type="submit" className="border border-black px-4 py-2 ml-2" disabled={isTyping}>
                    Send
                  </button>
                </form>
              </div>
            </div>

            <div className="border border-black p-4">
              <div className="font-bold mb-3">Suggested questions:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="border border-black p-2 text-left hover:bg-gray-100"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border border-black mb-6">
              <div className="h-[60vh] flex flex-col">
                <div className="flex-1 flex items-center justify-center bg-black">
                  <div className="text-center">
                    <img src="/images/avatar.png" alt="AI Avatar" className="w-64 h-64 mx-auto mb-4 object-cover" />
                    <div className="text-white mb-4">
                      {isListening ? "Listening..." : isTyping ? "Thinking..." : "Ready to chat"}
                    </div>
                  </div>
                </div>

                <div className="border-t border-black p-4 flex justify-center">
                  <button
                    onClick={handleVoiceInput}
                    className={`border border-black px-6 py-3 ${
                      isListening ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {isListening ? "Stop Listening" : "Start Voice Chat"}
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-black p-4">
              <div className="font-bold mb-3">Try saying:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <div key={index} className="border border-black p-2 text-gray-600">
                    "{question}"
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

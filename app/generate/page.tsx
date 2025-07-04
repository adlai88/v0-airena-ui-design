"use client"

import { useState } from "react"
import Link from "next/link"

export default function Generate() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const templates = [
    {
      id: "newsletter",
      title: "Newsletter Digest",
      description: "Create a professional newsletter from your are.na channel with key insights and resources",
    },
    {
      id: "research",
      title: "Channel Summary",
      description: "Synthesize your are.na channel into a comprehensive summary with citations",
    },
    {
      id: "insights",
      title: "Key Insights",
      description: "Extract the most important insights from your curated channel content",
    },
  ]

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)

    // Set default prompt based on template
    if (templateId === "newsletter") {
      setPrompt(
        "Create a newsletter digest from my Are.na channel. Include:\n\n" +
          "1. A compelling headline\n" +
          "2. 3-5 key insights from the channel content\n" +
          "3. Notable resources worth exploring\n" +
          "4. A thought-provoking conclusion\n\n" +
          "The tone should be informative yet conversational.",
      )
    } else if (templateId === "research") {
      setPrompt(
        "Generate a comprehensive summary from my Are.na channel. Include:\n\n" +
          "1. Executive summary\n\n" +
          "2. Key findings\n\n" +
          "3. Methodology\n\n" +
          "4. Detailed analysis\n\n" +
          "5. Conclusions and recommendations\n\n" +
          "Cite specific blocks from the channel where relevant.",
      )
    } else if (templateId === "insights") {
      setPrompt(
        "Extract the 10 most important insights from my Are.na channel. For each insight:\n\n" +
          "1. Provide a concise headline\n\n" +
          "2. Explain the insight in 2-3 sentences\n\n" +
          "3. Note which channel blocks support this insight\n\n" +
          "Focus on novel connections and non-obvious patterns.",
      )
    }
  }

  const handleGenerate = () => {
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      if (selectedTemplate === "newsletter") {
        setGeneratedContent(
          "# The Intersection of Design Systems and AI\n\n" +
            "In this week's digest, we explore how design systems are evolving alongside AI technologies, creating new possibilities for creators and researchers alike.\n\n" +
            "## Key Insights\n\n" +
            "1. **Design systems are becoming more adaptive** - Traditional static design systems are giving way to dynamic systems that respond to context and user needs.\n\n" +
            "2. **AI is augmenting rather than replacing designers** - The most successful implementations use AI to handle repetitive tasks while elevating human creativity.\n\n" +
            "3. **Cross-disciplinary collaboration is essential** - The most innovative work happens at the intersection of design, technology, and domain expertise.\n\n" +
            "## Notable Resources\n\n" +
            "- [Design Systems for the Age of AI](https://example.com) - A comprehensive framework for thinking about design in the age of artificial intelligence\n" +
            "- [Patterns of Emergence](https://example.com) - How complex systems theory informs modern design practices\n\n" +
            "## Final Thought\n\n" +
            "As we navigate this evolving landscape, perhaps the most valuable skill is not mastery of any particular tool, but rather the ability to synthesize knowledge across domains and recognize patterns that others miss.",
        )
      } else {
        setGeneratedContent(
          "# Generated Content\n\n" +
            "This is a placeholder for the generated content based on your Are.na channel and the selected template.\n\n" +
            "In a real implementation, this would contain AI-generated content that analyzes and synthesizes the information from your channel according to your prompt instructions.",
        )
      }

      setIsGenerating(false)
    }, 3000)
  }

  const handleBack = () => {
    setSelectedTemplate(null)
    setGeneratedContent("")
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        {!selectedTemplate ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">Templates</h1>
              <div className="flex gap-4">
                <Link href="/options">
                  <button className="border border-black px-4 py-2">Back</button>
                </Link>
                <Link href="/chat">
                  <button className="border border-black px-4 py-2">Switch to Chat</button>
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="border border-black p-6 cursor-pointer"
                  onClick={() => handleSelectTemplate(template.id)}
                >
                  <h2 className="text-xl font-bold mb-2">{template.title}</h2>
                  <p className="mb-4">{template.description}</p>
                  <button className="border border-black px-4 py-2">Use Template</button>
                </div>
              ))}
            </div>
          </>
        ) : !generatedContent ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">{templates.find((t) => t.id === selectedTemplate)?.title}</h1>
              <div className="flex gap-4">
                <button onClick={handleBack} className="border border-black px-4 py-2">
                  Back to Templates
                </button>
                <Link href="/chat">
                  <button className="border border-black px-4 py-2">Switch to Chat</button>
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="prompt" className="block mb-2 font-bold">
                Prompt
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full border border-black p-3 font-mono h-64"
              />
            </div>

            <button onClick={handleGenerate} disabled={isGenerating} className="border border-black px-6 py-3 w-full">
              {isGenerating ? "Generating..." : "Generate"}
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Generated Content</h1>
              <div className="flex gap-4">
                <button onClick={handleBack} className="border border-black px-4 py-2">
                  Back to Templates
                </button>
                <button className="border border-black px-4 py-2">Export</button>
              </div>
            </div>

            <div className="border border-black p-6 whitespace-pre-line">{generatedContent}</div>
          </>
        )}
      </div>
    </div>
  )
}

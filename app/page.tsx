import Link from "next/link"

export default function Home() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Turn your are.na channels into a personal intelligence agent</h1>
        <p className="text-xl mb-12">
          Generate newsletters, reports, and insights using AI powered by your own curation
        </p>

        <div className="flex gap-4 mb-16">
          <Link href="/setup">
            <button className="border border-black px-6 py-3">Try Demo</button>
          </Link>
          <button className="border border-black px-6 py-3 opacity-50 cursor-not-allowed" disabled>
            Join Waitlist
          </button>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extract content from websites, PDFs, videos</li>
            <li>Generate AI newsletters from your are.na channel</li>
            <li>Chat with your are.na channel</li>
            <li>Real-time streaming responses</li>
          </ul>
        </div>

        <div className="border-t border-black pt-8">
          <p>Airena is:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4">
            <li>software 3.0 for transforming your curated content into AI insights</li>
            <li>a toolkit for generating new knowledge from the scraps of the old</li>
          </ol>

          <p className="mt-8">
            People describe Airena as <span className="font-bold">"your personal research assistant"</span> or an{" "}
            <span className="font-bold">"intelligence amplifier"</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

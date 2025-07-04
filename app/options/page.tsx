import Link from "next/link"

export default function Options() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Channel Synced</h1>
        <p className="text-xl mb-12">
          Your Are.na channel has been successfully synced. Choose how to interact with your channel:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/generate" className="block">
            <div className="border border-black p-8 h-full hover:bg-gray-100">
              <h2 className="text-2xl font-bold mb-4">Generate</h2>
              <p className="mb-6">Create newsletters, reports, and insights using your channel content</p>
              <div className="border border-black w-full p-3 text-center">Use Templates</div>
            </div>
          </Link>

          <Link href="/chat" className="block">
            <div className="border border-black p-8 h-full hover:bg-gray-100">
              <h2 className="text-2xl font-bold mb-4">Chat</h2>
              <p className="mb-6">Have a conversation with your are.na channel and explore insights</p>
              <div className="border border-black w-full p-3 text-center">Start Chatting</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

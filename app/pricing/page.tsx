import Link from "next/link"

export default function Pricing() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Pricing</h1>

        <div className="grid gap-8">
          <div className="border border-black p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold">Premium</h2>
                <p className="mt-1">Unlimited channels, additional features.</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">$70 / year</div>
                <div className="text-sm">$7 / month</div>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Unlimited Are.na channels</li>
              <li>Advanced AI models</li>
              <li>Custom templates</li>
              <li>Export to multiple formats</li>
              <li>API access</li>
            </ul>
            <Link href="/signup">
              <button className="border border-black px-6 py-3 w-full">Get Premium</button>
            </Link>
          </div>

          <div className="border border-black p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold">Guest</h2>
                <p className="mt-1">Up to 3 channels.</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">Free</div>
                <div className="text-sm">forever</div>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Connect up to 3 Are.na channels</li>
              <li>Basic AI models</li>
              <li>Standard templates</li>
              <li>Limited exports</li>
            </ul>
            <Link href="/signup">
              <button className="border border-black px-6 py-3 w-full">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

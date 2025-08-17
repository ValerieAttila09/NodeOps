import { Link } from "react-router-dom"

export default function LandingPageComponent() {

  return (
    <div className="w-full">
      <div className="w-full h-screen bg-blue-50 pt-[8rem]">
        <h1 className="mx-auto w-[70%] text-6xl text-shadow-sm text-center outfit-regular text-[#0b1021]">Connect APIs. Build Workflows. Ship Faster.</h1>
        <p className="text-md text-[#455368] text-center mt-4">From webhooks to Google Sheets, build integrations in just minutes with a visual editor and real-time execution.</p>
        <div className="w-full flex items-center justify-center gap-2 mt-6">
          <button className="px-5 py-2 rounded-full bg-[#0b1021] text-white shadow-xs hover:shadow-sm transition-shadow">Get Started</button>
          <button className="px-5 py-2 rounded-full bg-white border border-[#ebebeb] shadow-xs hover:shadow-sm transition-shadow">See Documentation</button>
        </div>
      </div>
    </div>
  )
}
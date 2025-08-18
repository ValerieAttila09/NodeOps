import { ArrowRight, Database, FocusIcon, LucideDownloadCloud, StarsIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPageComponent() {

  return (
    <div className="w-full">
      <div className="w-full h-screen relative bg-[#f8feff] pt-[10rem]">
        <h1 className="mx-auto w-[65%] text-6xl text-shadow-sm text-center outfit-regular text-[#0b1021]">Connect APIs. Build Workflows. Ship Faster.</h1>
        <p className="md:w-[50%] mx-auto text-md text-[#455368] text-center mt-4">From webhooks to Google Sheets, build integrations in just minutes with a visual editor and real-time execution.</p>
        <div className="w-full flex items-center justify-center gap-2 mt-6">
          <button className="px-5 py-2 rounded-full bg-[#071952] text-white shadow-xs border border-[#ebebeb] hover:shadow-sm hover:bg-white hover:text-neutral-900 transition-all">Get Started</button>
          <button className="px-5 py-2 rounded-full bg-white border border-[#ebebeb] shadow-xs hover:shadow-sm transition-shadow">See Documentation</button>
        </div>
        <div className="mt-6 w-full flex flex-col justify-center items-center gap-1">
          <div className="flex items-center gap-[2px]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm text-neutral-800 outfit-regular">5.0</span>
          </div>
          <div className="text-sm">
            <span className="text-neutral-700">from 80+ <a href="#" className="text-neutral-900 outfit-regular hover:underline transition-all">reviews</a></span>
          </div>
        </div>

        <div className="absolute z-5 left-[7%] bottom-[30%] border border-[#0b1021] rounded-full p-2">
          <ArrowRight size={22} className="text-[#0b1021] -rotate-45"/>
        </div>
        <div className="absolute z-5 left-[12%] bottom-[25%] bg-[#071952] rounded-full p-2">
          <StarsIcon size={18} className="text-[#f8feff]"/>
        </div>
        <div className="absolute z-5 left-[9%] bottom-[41%] bg-[#37b703]/35 rounded-full p-2">
          <LucideDownloadCloud size={18} className="text-[#0b1021]"/>
        </div>
        
        <div className="absolute z-5 right-[7%] bottom-[35%] bg-[#071952] rounded-full p-2">
          <Database size={18} className="text-[#f8feff]"/>
        </div>
        <div className="absolute z-5 right-[12%] bottom-[29%] bg-[#37b703]/35 rounded-full p-2">
          <FocusIcon size={18} className="text-[#0b1021]"/>
        </div>

      </div>
    </div>
  )
}
import { ArrowRight, Database, FocusIcon, LucideDownloadCloud, SidebarIcon, StarsIcon } from "lucide-react"
import { Link } from "react-router-dom"
import LandingPageImg from "../assets/images/landingpage-img.jpg"
import CardIntro from "./content/CardIntro"

export function LandingPageHeader() {

  return (
    <div className="w-full">
      <div className="w-full h-[135vh] relative bg-[#f8feff] pt-[10rem]">
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

        <div className="absolute z-5 left-[7%] bottom-[42%] border border-[#0b1021] rounded-full p-2">
          <ArrowRight size={22} className="text-[#0b1021] -rotate-45" />
        </div>
        <div className="absolute z-5 left-[12%] bottom-[35%] bg-[#071952] rounded-full p-2">
          <StarsIcon size={18} className="text-[#f8feff]" />
        </div>
        <div className="absolute z-5 left-[9%] bottom-[51%] bg-[#37b703]/35 rounded-full p-2">
          <LucideDownloadCloud size={18} className="text-[#0b1021]" />
        </div>

        <div className="absolute z-5 right-[7%] bottom-[46%] bg-[#071952] rounded-full p-2">
          <Database size={18} className="text-[#f8feff]" />
        </div>
        <div className="absolute z-5 right-[12%] bottom-[39%] bg-[#37b703]/35 rounded-full p-2">
          <FocusIcon size={18} className="text-[#0b1021]" />
        </div>

        <div className="mt-[3rem] w-full h-[16rem] flex items-end justify-center gap-5">
          <div className="shadow-md h-full w-[10rem] overflow-hidden rounded-2xl">
            <img src={LandingPageImg} className="w-auto h-full object-cover" alt="" />
          </div>
          <div className="shadow-md w-auto h-4/5 bg-[#0b1021] rounded-2xl px-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl outfit-medium text-white mb-2">24/7</h1>
            <p className="max-w-[6rem] text-center text-sm text-neutral-300">Automation that is always ready to run at any time</p>
          </div>
          <div className="shadow-md w-[15rem] h-[70%] bg-white rounded-2xl px-5 py-4">
            <div className="w-full flex items-center justify-between">
              <div className="p-[6px] rounded-md bg-[#37b703]/35">
                <SidebarIcon size={16} className="text-[#0b1021]" />
              </div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-neutral-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-2 text-sm flex items-center gap-2 outfit-regular text-neutral-700">
              <span>Total Projects</span>
              <div className="bg-[#0b1021] rounded-full size-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-3 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <span>8%</span>
            </h3>
            <h1 className="my-3 text-5xl outfit-medium text-neutral-900">2361+</h1>
            <p className="text-sm text-neutral-600 outfit-regular">Increase of <span className="text-[#088395] outfit-medium">174</span> this month</p>
          </div>
          <div className="shadow-md w-auto h-4/5 bg-[#37B7C3]/20 rounded-2xl px-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl outfit-medium text-neutral-900 mb-2">5+</h1>
            <p className="max-w-[6rem] text-center text-sm text-neutral-600">Years of Dedicated Service</p>
          </div>
          <div className="shadow-md w-auto h-full bg-gradient-to-br from-[#0b1021] via-blue-900 to-[#088395] rounded-2xl px-4 py-5 flex flex-col items-start justify-end">
            <div className="my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
            <p className="max-w-[8rem] outfit-regular text-md text-shadow-lg text-neutral-100">Solutions that grow with your business.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export function LandingPageIntro() {
  return (
    <div className="w-full bg-[#071952] py-[5rem] px-6">
      <div className="mb-10 flex flex-col items-center justify-center py-2">
        <h1 className="text-5xl mb-3 text-white text-shadow-md outfit-regular">Efficient and Integrated <br/> Manufacturing Services</h1>
        <p className="text-sm outfit-thin text-neutral-200">Simplify operations with our efficient. quality-focused services.</p>
      </div>
      <div className="grid grid-cols-3 gap-6 px-8">
        <CardIntro/>
        <CardIntro/>
        <CardIntro/>
        <CardIntro/>
        <CardIntro/>
        <CardIntro/>
      </div>
    </div>
  )
}
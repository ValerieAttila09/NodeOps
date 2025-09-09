import { ArrowRight, Database, FocusIcon, LucideDownloadCloud, PhoneCallIcon, SidebarIcon, StarsIcon } from "lucide-react"
import { Link } from "react-router-dom"
import LandingPageImg from "../assets/images/sigmund-psXNymQI7Pk-unsplash.jpg"
import CardIntro from "./content/CardIntro"
import GoogleIcon from "../assets/images/Google_Symbol_1.png"
import GithubIcon from "../assets/images/GitHub_Symbol_1.png"
import GitlabIcon from "../assets/images/GitLab_Symbol_1.png"
import AzureIcon from "../assets/images/Microsoft Azure Portal_idc8nWN0hO_1.png"
import NVIDIAIcon from "../assets/images/NVIDIA_Symbol_1.png"
import MicrosoftIcon from "../assets/images/Microsoft_Symbol_1.png"

export function LandingPageHeader() {

  return (
    <div className="w-full">
      <div className="w-full p-6 md:p-0 h-full sm:h-[135vh] relative bg-[#f8feff] py-[6rem] sm:py-[8rem] md:py-[10rem]">
        <h1 className="mx-auto w-[90%] md:w-[65%] text-4xl sm:text-5xl md:text-6xl text-shadow-sm text-center outfit-regular text-[#0b1021]">Connect APIs. Build Workflows. Ship Faster.</h1>
        <p className="w-[95%] md:w-[50%] mx-auto text-sm md:text-md text-[#455368] text-center mt-4">From webhooks to Google Sheets, build integrations in just minutes with a visual editor and real-time execution.</p>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-6">
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

        <div className="absolute z-5 left-[7%] bottom-[36%] sm:bottom-[42%] border border-[#0b1021] rounded-full p-2">
          <ArrowRight size={22} className="text-[#0b1021] -rotate-45" />
        </div>
        <div className="absolute z-5 left-[12%] bottom-[47%] sm:bottom-[35%] bg-[#071952] rounded-full p-2">
          <StarsIcon size={18} className="text-[#f8feff]" />
        </div>
        <div className="absolute z-5 left-[9%] bottom-[24%] sm:bottom-[51%] bg-[#37b703]/35 rounded-full p-2">
          <LucideDownloadCloud size={18} className="text-[#0b1021]" />
        </div>

        <div className="absolute z-5 right-[7%] bottom-[41%] sm:bottom-[46%] bg-[#071952] rounded-full p-2">
          <Database size={18} className="text-[#f8feff]" />
        </div>
        <div className="absolute z-5 right-[12%] bottom-[24%] sm:bottom-[39%] bg-[#37b703]/35 rounded-full p-2">
          <FocusIcon size={18} className="text-[#0b1021]" />
        </div>

        <div className="hidden mt-[3rem] w-full h-[16rem] sm:flex items-end justify-center gap-5">
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
        <h1 className="sm:text-5xl text-4xl mb-3 text-white text-center text-shadow-md outfit-regular">Efficient and Integrated <br /> Manufacturing Services</h1>
        <p className="text-sm outfit-thin text-neutral-200">Simplify operations with our efficient. quality-focused services.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        <CardIntro />
        <CardIntro />
        <CardIntro />
        <CardIntro />
        <CardIntro />
        <CardIntro />
      </div>
    </div>
  )
}

export function LandingPageBenefits() {
  return (
    <div className="w-full bg-[#f8feff] py-[5rem] p-4 md:px-[4rem]">
      <div className="flex flex-col md:flex-row gap-[4rem]">

        <div className="md:w-5/7 w-full border border-[#ebebeb] rounded-2xl bg-[#ebebeb] p-4 md:px-[4.2rem] md:py-[2.8rem] relative flex items-center justify-center">
          <div className="w-full h-full rounded-md bg-[#f8feff] p-6 shadow-2xl">
            <div className="mb-2">
              <h1 className="text-lg mb-1 text-neutral-500 outfit-thin">Total Projects</h1>
              <div className="flex items-center gap-2">
                <span className="text-xl text-neutral-800 outfit-regular">1475</span>
                <div className="bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-3 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <span className="text-md text-green-500 outfit-thin">34%</span>
              </div>
            </div>
            <div className="my-5 w-full rounded-full h-[1px] bg-[#ebebeb]"></div>
            <div className="grid mb-2 gap-3">
              <div className="flex items-center justify-between">
                <div className="w-1/5">
                  <span className="text-sm text-neutral-500 outfit-thin">Test Data</span>
                </div>
                <div className="w-3/5">
                  <div className="w-[87%] h-4 bg-[#ebebeb] rounded-sm"></div>
                </div>
                <div className="w-1/5">
                  <p className="text-md text-end text-neutral-700 outfit-regular">17%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/5">
                  <span className="text-sm text-neutral-500 outfit-thin">Test Data</span>
                </div>
                <div className="w-3/5">
                  <div className="w-[92%] h-4 bg-[#ebebeb] rounded-sm"></div>
                </div>
                <div className="w-1/5">
                  <p className="text-md text-end text-neutral-700 outfit-regular">22%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/5">
                  <span className="text-sm text-neutral-500 outfit-thin">Test Data</span>
                </div>
                <div className="w-3/5">
                  <div className="w-[83%] h-4 bg-[#ebebeb] rounded-sm"></div>
                </div>
                <div className="w-1/5">
                  <p className="text-md text-end text-neutral-700 outfit-regular">13%</p>
                </div>
              </div>
            </div>
            <div className="my-5 w-full rounded-full h-[1px] bg-[#ebebeb]"></div>
            <div className="mb-2 rounded-sm bg-[#ebebeb] w-full h-4"></div>
            <div className="w-full h-[120px] flex items-end justify-between gap-3">
              <div className="w-[8%] h-[86%] bg-[#071952] rounded-sm"></div>
              <div className="w-[8%] h-[79%] bg-[#088395] rounded-sm"></div>
              <div className="w-[8%] h-[89%] bg-[#071952] rounded-sm"></div>
              <div className="w-[8%] h-[74%] bg-[#088395] rounded-sm"></div>
              <div className="w-[8%] h-[72%] bg-[#071952] rounded-sm"></div>
              <div className="w-[8%] h-[92%] bg-[#088395] rounded-sm"></div>
              <div className="w-[8%] h-[96%] bg-[#071952] rounded-sm"></div>
              <div className="w-[8%] h-[82%] bg-[#088395] rounded-sm"></div>
              <div className="w-[8%] h-[76%] bg-[#071952] rounded-sm"></div>
              <div className="w-[8%] h-[95%] bg-[#088395] rounded-sm"></div>
            </div>
          </div>
          <div className="absolute z-5 w-[265px] h-auto bottom-8 right-6 bg-[#f8feff] rounded-2xl border border-[#ebebeb] shadow-2xl p-6">
            <div className="mb-3 w-full flex items-center justify-between">
              <div className="p-1 rounded-md bg-[#37B7C3]/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <button className="p-1 border border-transparent hover:bg-[#fafafa] hover:border-[#ebebeb] transition-all rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
              </button>
            </div>
            <div className="w-full">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-md text-neutral-700 outfit-regular">Total Projects</span>
                <div className="bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-3 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <span className="text-md text-green-500 outfit-thin">34%</span>
              </div>
              <h1 className="mb-2 text-4xl outfit-medium text-neutral-800">2361+</h1>
              <p className="text-sm text-neutral-600">Increase of <span className="text-[#088395] outfit-regular">174</span> this month</p>

            </div>
          </div>
        </div>

        <div className="w-full px-2">
          <h1 className="text-5xl mb-3 text-shadow-sm text-neutral-900 outfit-regular">Key Benefits of Our System for Your Projects Efficiency</h1>
          <p className="text-md mb-5 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia ut in aspernatur. Ratione quidem aperiam totam illum repellat. Quos, consectetur minima!</p>

          <div className="grid gap-4">
            <div className="flex items-start gap-2">
              <span className="pt-[2px] px-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#071952]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl outfit-regular text-neutral-800">Test Poin-poin Benefits</h1>
                <p className="text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto nam rem consequuntur unde omnis quidem iste repudiandae, itaque mollitia. Quam voluptatibus ducimus aliquid.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="pt-[2px] px-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#071952]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl outfit-regular text-neutral-800">Test Poin-poin Benefits</h1>
                <p className="text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto nam rem consequuntur unde omnis quidem iste repudiandae, itaque mollitia. Quam voluptatibus ducimus aliquid.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="pt-[2px] px-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#071952]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl outfit-regular text-neutral-800">Test Poin-poin Benefits</h1>
                <p className="text-md text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto nam rem consequuntur unde omnis quidem iste repudiandae, itaque mollitia. Quam voluptatibus ducimus aliquid.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export function LandingPagePlans() {
  return (
    <div className="w-full bg-[#040f14] py-[5rem] px-[4rem]">
      <div className="mb-10 flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl mb-3 text-white text-shadow-md outfit-regular">Tailored Plans for Your<br /> Manufacturing Scale</h1>
        <p className="text-sm outfit-thin text-neutral-200">Flexible pricing for any business size.</p>
      </div>

      <div className="grid grid-cols-2 mx-auto max-w-5xl gap-4">
        <div className="col-span-1 h-full rounded-xl p-6 bg-slate-800/40">
          <h1 className="text-2xl text-white outfit-regular mb-2">Starter</h1>
          <p className="text-md text-neutral-300 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel id illo facilis culpa nisi, recusandae quos quidem laborum quis.</p>

          <h1 className="text-4xl mb-2 text-white outfit-medium">
            <span>$39</span>
            <span className="text-lg outfit-thin text-neutral-200">/month</span>
          </h1>

          <button className="w-full my-6 rounded-full bg-transparent border border-white p-2 text-white outfit-regular hover:bg-neutral-900/40 hover:shadow-md transition-all">Get Started</button>

          <div className="w-full my-2 flex items-center gap-4 justify-center">
            <div className="w-full bg-neutral-400 h-[1px] rounded-full"></div>
            <p className="text-neutral-400">Features</p>
            <div className="w-full bg-neutral-400 h-[1px] rounded-full"></div>
          </div>

          <ul className="mt-6 grid gap-1">
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </div>
        <div className="col-span-1 h-full rounded-xl p-6 bg-slate-800/40">
          <h1 className="text-2xl text-white outfit-regular mb-2">Enterprise</h1>
          <p className="text-md text-neutral-300 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel id illo facilis culpa nisi, recusandae quos quidem laborum quis.</p>

          <h1 className="text-4xl mb-2 text-white outfit-medium">
            <span>$59</span>
            <span className="text-lg outfit-thin text-neutral-200">/ month</span>
          </h1>

          <button className="w-full my-6 rounded-full bg-transparent border border-white p-2 text-white outfit-regular hover:bg-neutral-900/40 hover:shadow-md transition-all">Get Started</button>

          <div className="w-full my-2 flex items-center gap-4 justify-center">
            <div className="w-full bg-neutral-400 h-[1px] rounded-full"></div>
            <p className="text-neutral-400">Features</p>
            <div className="w-full bg-neutral-400 h-[1px] rounded-full"></div>
          </div>

          <ul className="mt-6 grid gap-1">
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-white text-md">Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </div>
        <div className="col-span-2 h-full rounded-xl p-6 bg-gradient-to-t from-green-600/60 to-green-800 flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-1 text-white outfit-regular">Professional</h1>
          <p className="text-sm mb-4 text-center text-neutral-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Nihil ullam labore hic velit, accusantium recusandae harum quasi!</p>
          <button className="px-8 py-2 outfit-regular rounded-full bg-[#f8feff]/80 shadow-sm hover:bg-white hover:shadow-lg transition-all">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export function LandingPageIntegration() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6 bg-[#f8feff] py-[5rem] p-4 md:px-[4rem]">
      <div className="col-span-1 flex flex-col items-start justify-center">
        <h1 className="mb-4 text-4xl text-neutral-900 outfit-medium">Empowering Top Companies with Seamless Integrations</h1>
        <p className="text-md text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt laboriosam ipsum perferendis ea, perspiciatis, est dolor deserunt velit, omnis voluptates aliquid? Repellat ipsum nesciunt tempora labore?</p>
        <button className="my-7 text-lg px-4 py-2 bg-[#37B7C3]/25 rounded-full hover:bg-[#37B7C3] transition-all">Work With Us</button>
      </div>
      <div className="col-span-1 w-full h-[390px] sm:h-[420px]">
        <div className="flex items-center justify-center w-full h-full rounded-lg bg-[#37B7C3]/25 relative overflow-hidden">
          <div className="absolute size-[162px] rounded-full bg-transparent border border-[#c5dbdd]"></div>
          <div className="absolute size-[282px] rounded-full bg-transparent border border-[#c5dbdd]"></div>
          <div className="absolute size-[420px] rounded-full bg-transparent border border-[#c5dbdd]"></div>
          <div className="absolute top-13 rounded-lg bg-white overflow-hidden p-1 py-2">
            <svg className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 439 309" xmlSpace="preserve">
              <path className="st0" fill="#1D63ED" d="M379.6,111.7c-2.3-16.7-11.5-31.2-28.1-44.3l-9.6-6.5l-6.4,9.7c-8.2,12.5-12.3,29.9-11,46.6  c0.6,5.8,2.5,16.4,8.4,25.5c-5.9,3.3-17.6,7.7-33.2,7.4H1.7l-0.6,3.5c-2.8,16.7-2.8,69,30.7,109.1c25.5,30.5,63.6,46,113.4,46  c108,0,187.8-50.3,225.3-141.9c14.7,0.3,46.4,0.1,62.7-31.4c0.4-0.7,1.4-2.6,4.2-8.6l1.6-3.3l-9.1-6.2  C419.9,110.8,397.2,108.3,379.6,111.7L379.6,111.7z M240,0h-45.3v41.7H240V0z M240,50.1h-45.3v41.7H240V50.1z M186.4,50.1h-45.3  v41.7h45.3V50.1z M132.9,50.1H87.6v41.7h45.3V50.1z M79.3,100.2H34v41.7h45.3V100.2z M132.9,100.2H87.6v41.7h45.3V100.2z   M186.4,100.2h-45.3v41.7h45.3V100.2z M240,100.2h-45.3v41.7H240V100.2z M293.6,100.2h-45.3v41.7h45.3V100.2z"></path>
            </svg>
          </div>
          <div className="absolute bottom-13 rounded-lg bg-white overflow-hidden px-2 py-1">
            <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 310" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z" fill="#000000" fillRule="nonzero" /></g></svg>
          </div>
          <div className="absolute right-17 rounded-lg bg-white overflow-hidden px-2 py-2">
            <svg className="w-6 h-auto" xmlnsX="ns_extend;" xmlnsI="ns_ai;" xmlnsGraph="ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 57.7 50" xmlSpace="preserve"><metadata><sfw xmlns="ns_sfw;"><slices></slices><sliceSourceBounds height="50" width="57.7" x="4150.3" y="-52.1"></sliceSourceBounds></sfw></metadata><path d="M28.9,0l28.9,50H0L28.9,0z"></path></svg>
          </div>
          <div className="absolute left-17 rounded-lg bg-white overflow-hidden px-3 py-[6px]">
            <svg className="w-3 h-auto" xmlnsX="ns_extend;" xmlnsI="ns_ai;" xmlnsGraph="ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 120 257" xmlSpace="preserve"><metadata><sfw xmlns="ns_sfw;"><slices></slices><sliceSourceBounds height="257" width="120" x="0" y="21"></sliceSourceBounds></sfw></metadata><g><path className="st0" fill="#00684A" d="M82.3,28.6C71.5,15.8,62.2,2.8,60.4,0.1c-0.2-0.2-0.5-0.2-0.7,0c-1.9,2.7-11.2,15.7-22,28.5   c-92.6,118.1,14.6,197.8,14.6,197.8l0.9,0.6c0.8,12.3,2.8,30,2.8,30h4h4c0,0,2-17.6,2.8-30l0.9-0.7   C67.7,226.4,174.9,146.7,82.3,28.6z M60,224.6c0,0-4.8-4.1-6.1-6.2v-0.2l5.8-128.6c0-0.4,0.6-0.4,0.6,0L66,218.2v0.2   C64.7,220.5,60,224.6,60,224.6z"></path></g></svg>
          </div>
          <div className="absolute right-25 top-21 rounded-lg bg-white overflow-hidden px-2 py-[6px]">
            <svg className="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 276" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M238.04054,223.122821 C236.10911,237.466648 226.457473,249.879044 212.942976,255.395053 C206.322113,258.150302 199.152955,258.979632 191.981042,258.150302 C185.087409,257.323727 178.19102,255.116773 171.021862,250.983899 C161.091945,245.46238 151.162028,236.915598 139.578961,224.227676 C157.782891,201.888117 168.812153,181.477232 172.950537,163.278812 C174.881966,154.726519 175.157491,147.003556 174.330917,139.831643 C173.228817,132.93801 170.746338,126.592672 166.883478,121.076663 C158.333941,108.667021 143.99287,101.495108 127.995894,101.495108 C111.998918,101.495108 97.6578467,108.942546 89.108309,121.076663 C85.2454499,126.592672 82.7657258,132.93801 81.6608709,139.831643 C80.5587713,147.003556 80.8342962,155.002044 83.0412507,163.278812 C87.1768794,181.477232 98.4844214,202.163642 116.412827,224.500446 C105.105285,237.191123 94.8998425,245.74066 84.969925,251.256669 C77.800767,255.395053 70.9043787,257.602007 64.0107457,258.425827 C56.5633076,259.255157 49.3913943,258.150302 43.0488111,255.670578 C29.5343146,250.154569 19.8826773,237.739417 17.9512477,223.398346 C17.124673,216.504713 17.6757228,209.61108 20.4337271,201.888117 C21.2603018,199.127357 22.6406816,196.374864 24.0183061,193.063054 C25.9497357,188.651901 28.1566901,183.959712 30.3608893,179.270278 L30.6391695,178.721983 C49.6669192,137.624689 70.077804,95.7035748 91.3152635,54.8873158 L92.1418382,53.2286559 C94.3487927,49.0957823 96.5529919,44.6846287 98.7627016,40.5462446 C100.966901,36.1323357 103.44938,31.9939517 106.482909,28.4066174 C112.274443,21.785754 119.997406,18.201175 128.546944,18.201175 C137.096481,18.201175 144.819444,21.785754 150.610978,28.4066174 C153.644507,31.9939517 156.126986,36.1323357 158.333941,40.5462446 C160.540895,44.6846287 162.745094,49.0957823 164.952049,53.2286559 L165.781379,54.8873158 C186.740558,95.9790997 207.151443,137.900214 226.181948,178.997508 L226.181948,179.270278 C228.388902,183.684187 230.317577,188.651901 232.524531,193.063054 C233.904911,196.374864 235.282535,199.127357 236.10911,201.888117 C238.316065,209.057275 239.142639,215.956418 238.04054,223.122821 L238.04054,223.122821 Z M127.995894,210.159374 C113.103773,191.40715 103.44938,173.754269 100.140326,158.864903 C98.7627016,152.519565 98.4844214,147.003556 99.3137514,142.038598 C99.8648012,137.624689 101.520706,133.76183 103.724905,130.45002 C108.965389,123.010848 117.790451,118.313148 127.995894,118.313148 C138.201336,118.313148 147.301924,122.729812 152.266882,130.45002 C154.471082,133.76183 156.126986,137.624689 156.678036,142.038598 C157.504611,147.003556 157.229086,152.79509 155.851461,158.864903 C152.542407,173.481499 142.888015,191.131625 127.995894,210.159374 L127.995894,210.159374 Z M252.381611,195.818303 C251.003986,192.509249 249.623607,188.92467 248.245982,185.891141 C246.039028,180.928938 243.832073,176.236749 241.900644,171.82284 L241.625119,171.55007 C222.597369,130.177251 202.186484,88.2561367 180.6735,46.8915831 L179.846925,45.2329232 C177.639971,41.0945392 175.433016,36.6806302 173.228817,32.2694766 C170.468057,27.3017626 167.710053,22.0667894 163.298899,17.0990754 C154.471082,6.06705835 141.785915,0 128.271419,0 C114.481397,0 102.071756,6.06705835 92.9684129,16.5507809 C88.8327841,21.5129844 85.7992549,26.753468 83.0412507,31.721182 C80.8342962,36.1323357 78.6273417,40.5462446 76.4203873,44.6846287 L75.5938126,46.3350228 C54.3591083,87.7050869 33.6726987,129.628956 14.6421937,170.99902 L14.3666688,171.55007 C12.4352392,175.961224 10.2282847,180.647902 8.02133027,185.615616 C6.64370576,188.651901 5.263326,191.960955 3.88570148,195.545534 C0.298367256,205.748221 -0.803732353,215.402613 0.573892159,225.329776 C3.61017658,246.016185 17.4001979,263.393541 36.4307029,271.113749 C43.5998609,274.150033 51.047299,275.527658 58.770262,275.527658 C60.9772165,275.527658 63.7352208,275.252133 65.9421752,274.973852 C75.0427628,273.868998 84.4188752,270.840979 93.5194627,265.59774 C104.82976,259.255157 115.586252,250.154569 127.720369,236.915598 C139.854486,250.154569 150.886503,259.255157 161.91852,265.59774 C171.021862,270.840979 180.397975,273.868998 189.498562,274.973852 C191.705517,275.252133 194.463521,275.527658 196.670476,275.527658 C204.393439,275.527658 212.113646,274.150033 219.010035,271.113749 C238.316065,263.393541 251.830561,245.74066 254.86409,225.329776 C257.071045,215.675383 255.96619,206.026501 252.381611,195.818303 L252.381611,195.818303 Z" fill="#FF385C"></path></g></svg>
          </div>
          <div className="absolute left-25 top-21 rounded-lg bg-white overflow-hidden px-2 py-[6px]">
            <img src={GoogleIcon} alt="" className="w-6 h-auto" />
          </div>
          <div className="absolute left-25 bottom-21 rounded-lg bg-white overflow-hidden px-2 py-[6px]">
            <img src={GithubIcon} alt="" className="w-6 h-auto" />
          </div>
          <div className="absolute right-25 bottom-21 rounded-lg bg-white overflow-hidden px-2 py-[6px]">
            <img src={GitlabIcon} alt="" className="w-6 h-auto" />
          </div>
          <div className="absolute right-57 bottom-31 rounded-lg bg-white overflow-hidden p-2">
            <img src={MicrosoftIcon} alt="" className="w-6 h-auto" />
          </div>
          <div className="absolute right-56 md:top-31 top-25 rounded-lg bg-white overflow-hidden px-2 py-3">
            <img src={NVIDIAIcon} alt="" className="w-6 h-auto" />
          </div>
          <div className="absolute md:left-51 md:right-[29%] bottom-1/2 rounded-lg bg-white overflow-hidden px-2 py-[6px]">
            <img src={AzureIcon} alt="" className="w-6 h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LandingPageLast() {
  return (
    <div className="w-full bg-[#0c1430] py-[5rem] px-[4rem] flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl outfit-medium text-white">From idea to Production in Days</h1>
        <p className="mb-2 text-lg text-center text-neutral-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, totam excepturi quis voluptatem amet distinctio laudantium!</p>
        <button className="my-7 text-lg px-4 py-2 text-white bg-[#088395] rounded-full hover:bg-[#37B7C3] transition-all">Work With Us</button>
      </div>
    </div>
  )
}

export function LandingPageFooter() {
  return (
    <div className="w-full bg-[#121c22] px-[4rem] py-[5rem] flex items-start justify-between gap-[10rem]">
      <div className="w-[35%]">
        <div className="mb-4 flex items-center gap-2">
          <div className="size-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#071952] to-blue-900 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-lg outfit-regular bg-clip-text text-transparent bg-gradient-to-r from-[#4b75ff] via-blue-100 to-sky-400">NodeOps</h1>
        </div>
        <p className="text-sm text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae dolorum aperiam sunt, accusamus aspernatur repellendus quam voluptatibus eum doloremque nisi architecto magni.</p>
      </div>
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-white">Company</h3>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">About Us</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Documentation</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Events</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Updates</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-white">Industries</h3>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Precision Metalforming</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Programm Manufacturing</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">High Tech & Utility</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Integrations</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-white">Products</h3>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Manufacturing Execution System</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Enterprise Resource Planning</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Quality Management System</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">Supply Chain Planning</Link>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">AI Agent</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-white">Get In Touch</h3>
          <Link to={"/"} className="text-sm text-neutral-300 hover:underline transition-all">test123@gmail.com</Link>
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <button className="p-1 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-all">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
                  <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3  c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13  c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z" />
                </svg>
              </button>
            </Link>
            <Link to={"/"}>
              <button className="p-1 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-all">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" version="1.1"><g id="Page-1" stroke="none" stroke-width="1" fill="#ffffff" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
              </button>
            </Link>
            <Link to={"/"}>
              <button className="p-1 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-all">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import Logo from "../assets/images/logo_zapflow-removebg-preview.png"
import { Link } from "react-router-dom"
import SignInButton from "./content/SignInButton"

export default function Navbar() {

  return (
    <div className="fixed top-0 w-full sm:px-[4rem] md:px-[6rem] px-4 py-[10px] bg-white/35 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="size-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#071952] to-blue-900 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-lg outfit-regular bg-clip-text text-transparent bg-gradient-to-r from-[#071952] via-blue-800 to-sky-700">NodeOps</h1>
      </div>
      <div className="hidden sm:flex items-center">
        <Link to={"/"}>
          <button className="outfit-regular text-neutral-700 hover:text-neutral-900 transition-all rounded-md px-3 py-1 cursor-pointer">Home</button>
        </Link>
        <Link to={"/about"}>
          <button className="outfit-regular text-neutral-700 hover:text-neutral-900 transition-all rounded-md px-3 py-1 cursor-pointer">About</button>
        </Link>
        <Link to={"/orders"} className="me-2">
          <button className="outfit-regular text-neutral-700 hover:text-neutral-900 transition-all rounded-md px-3 py-1 cursor-pointer">Pricing</button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <SignInButton />
      </div>
    </div>
  )
}
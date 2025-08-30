import { LandingPageBenefits, LandingPageHeader, LandingPageIntro } from "../components/LandingPage";
import Navbar from "../components/Navbar";


export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar/>
      <LandingPageHeader/>
      <LandingPageIntro/>
      <LandingPageBenefits/>
    </div>
  )
}
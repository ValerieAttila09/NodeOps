import { LandingPageBenefits, LandingPageHeader, LandingPageIntro, LandingPagePlans } from "../components/LandingPage";
import Navbar from "../components/Navbar";


export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar/>
      <LandingPageHeader/>
      <LandingPageIntro/>
      <LandingPageBenefits/>
      <LandingPagePlans/>
    </div>
  )
}
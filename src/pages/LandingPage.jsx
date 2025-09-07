import { LandingPageBenefits, LandingPageFooter, LandingPageHeader, LandingPageIntegration, LandingPageIntro, LandingPageLast, LandingPagePlans } from "../components/LandingPage";
import Navbar from "../components/Navbar";


export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar/>
      <LandingPageHeader/>
      <LandingPageIntro/>
      <LandingPageBenefits/>
      <LandingPagePlans/>
      <LandingPageIntegration/>
      <LandingPageLast/>
      <LandingPageFooter/>
    </div>
  )
}
import { HeaderSection } from "./components/HeaderSection"
import { AboutSection } from "./components/AboutSection"
import { FieldOfExpertise } from "./components/FieldOfExpertise"
import { ConnectWithMe } from "./components/ConnectWithMe"
import { FooterSection } from "./components/FooterSection"
function App() {


  return (
    <>
      <div className="h-screen overflow-y-auto bg-gray-200 dark:bg-slate-800 dark:text-slate-400">
          <HeaderSection />
          <AboutSection></AboutSection>
          <FieldOfExpertise></FieldOfExpertise>
          <ConnectWithMe></ConnectWithMe>
          <FooterSection></FooterSection>
      </div>
   
    </>
  )
}

export default App

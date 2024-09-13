import { HeaderSection } from "./components/HeaderSection"
import { AboutSection } from "./components/AboutSection"
import { FieldOfExpertise } from "./components/FieldOfExpertise"
import { ConnectWithMe } from "./components/ConnectWithMe"
import { FooterSection } from "./components/FooterSection"
function App() {


  return (
    <>
      <div className="h-screen overflow-y-auto ">
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

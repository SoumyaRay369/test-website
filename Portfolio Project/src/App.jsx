import { HeaderSection } from "./components/HeaderSection"
import { AboutSection } from "./components/AboutSection"
import { FieldOfExpertise } from "./components/FieldOfExpertise"
import { ConnectWithMe } from "./components/ConnectWithMe"
import { FooterSection } from "./components/FooterSection"
function App() {


  return (
    <>
      <HeaderSection />
      <AboutSection></AboutSection>
      <FieldOfExpertise></FieldOfExpertise>
      <ConnectWithMe></ConnectWithMe>
      <FooterSection></FooterSection>
    </>
  )
}

export default App

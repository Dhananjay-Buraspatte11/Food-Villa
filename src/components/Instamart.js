import React from 'react'
import { useState } from 'react'

const Section = ({ name, description, isVisible, setIsVisible }) => {


  return (
    <>

      <h3>{name}</h3>
      {/* {
        isVisible ? <button onClick={()=>setIsVisible(false)}>hide</button> : <button onClick={()=>setIsVisible(true)}>Show</button> 
      }   */}

      {
        isVisible ? <button onClick={() => setIsVisible(false)}>Hide</button> : <button onClick={() => setIsVisible(true)}>Show</button>
      }



      {isVisible && <p>{description}</p>}
    </>
  )

}
const Instamart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showTeam: false,
  //   showCarrier: false
  // })
  const [visibleSection, setVisibleSection] = useState("About")
  return (
    <div>
      <h1>Instamart</h1>
      <h1>100rs of component inside it</h1>
      <Section title={"About Instamart"} description={"This is about section of the Instamart"}
        isVisible={visibleSection === "About"}
        setIsVisible={() => setVisibleSection("About")} />
      <Section title={"Team Instamart"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={visibleSection === "Team"}
        setIsVisible={() => setVisibleSection("Team")} />
      <Section title={"Carrier Instamart"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={visibleSection === "Carrier"}
        setIsVisible={() => setVisibleSection("Carrier")} />
    </div>
  )
}

export default Instamart
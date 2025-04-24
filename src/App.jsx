import Navbar from "../src/components/Navbar"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Faq from "../src/pages/Faq"
import Contact from "../src/pages/Contact"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Faq"element={<Faq/>}/>
      <Route path="/Contact"element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App

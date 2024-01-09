import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Blog from "./Pages/Blog.jsx"
import Header from "./Components/Header.jsx"
import arrUp from "./assets/Images/arr-up.svg"

function App() {

  //the code below controls how the scroll to top btn
  const [scrollable, setScr] = React.useState(0)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScr(1)
  }
  else{
    setScr(0)
  }
})

  //it ends here

  return (
    <>
      <BrowserRouter>

        <Header />

        <img onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}} title="Back to top" src={arrUp} className={`
        toTop z-[30] fixed bottom-4 right-4 bg-redd w-12 h-12 rounded-full p-2 cursor-pointer  duration-300
        hover:bg-[#cc3f43] border border-lred shadow-lg ${scrollable ? "bottom-4" : "-bottom-20"}
        `} />

        <Routes>
          {/* Routes for Pages..to avoid confusion */}
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
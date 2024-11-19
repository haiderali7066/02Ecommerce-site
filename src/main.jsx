import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import './index.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignIn from './pages/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="Signin" element={<SignIn />} />
      <Route path="about" element={<About />} />
     

  </Routes>
  <Footer></Footer>
</BrowserRouter>,
)

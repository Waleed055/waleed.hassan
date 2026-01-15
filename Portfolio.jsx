import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import AboutSection from "./pages/aboutPage/about";
import Navbar from "./components/navbar/navbar";
import Experience from "./pages/experience/experience"; 
import Services from "./pages/servicesPage/servicesPage"
import Projects from "./pages/projects/projectsPage";
import ContactPage from "./pages/contactPage/contactPage";

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
        
      </BrowserRouter>
  );
}

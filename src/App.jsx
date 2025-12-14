import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {}
        <Navbar />

        {}
        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} /> 
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </div>
        <Footer /> {}
      </div>
    </BrowserRouter>
  );
}
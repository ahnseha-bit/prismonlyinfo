import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundStars from "./components/BackgroundStars";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import BoothPage from "./pages/BoothPage";
import EventPage from "./pages/EventPage";
import LinkWorldPage from "./pages/LinkWorldPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-black/80 selection:bg-blue-50 flex flex-col font-serif">
        <BackgroundStars />
        <Navbar />
        {/* main fills remaining height below Navbar and centers its children */}
        <main className="w-full flex-1 flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/booth" element={<BoothPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/links" element={<LinkWorldPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import HavenAcademy from "./pages/HavenAcademy";
import HavenTribe from "./pages/HavenTribe";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Explorers from "./pages/Explorers";
import ArtsCulture from "./pages/ArtsCulture";
import Impact from "./pages/Impact";
import Advocacy from "./pages/Advocacy";
import Friends from "./pages/Friends";
import CommunityHour from "./pages/CommunityHour";
import Contact from "./pages/Contact";

ReactGA.initialize("G-2QSYVG9JZE");

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haven-academy" element={<HavenAcademy />} />
          <Route path="/haven-tribe" element={<HavenTribe />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/explorers" element={<Explorers />} />
          <Route path="/arts-culture" element={<ArtsCulture />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/community-hour" element={<CommunityHour />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

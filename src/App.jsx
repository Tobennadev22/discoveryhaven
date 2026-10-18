import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import ReactGA from "react-ga4";
import { Layout } from "./components/layout/Layout";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const HavenAcademy = lazy(() => import("./pages/HavenAcademy"));
const HavenTribe = lazy(() => import("./pages/HavenTribe"));
const Explore = lazy(() => import("./pages/Explore"));
const About = lazy(() => import("./pages/About"));
const Explorers = lazy(() => import("./pages/Explorers"));
const ArtsCulture = lazy(() => import("./pages/ArtsCulture"));
const Impact = lazy(() => import("./pages/Impact"));
const Reports = lazy(() => import("./pages/Reports"));
const Advocacy = lazy(() => import("./pages/Advocacy"));
const Partnership = lazy(() => import("./pages/Partnership"));
const CommunityHour = lazy(() => import("./pages/CommunityHour"));
const Contact = lazy(() => import("./pages/Contact"));
const CreativeQuest = lazy(() => import("./pages/courses/CreativeQuest"));
const LoudFearless = lazy(() => import("./pages/courses/LoudFearless"));
const CuriosityBox = lazy(() => import("./pages/courses/CuriosityBox"));
const EQLab = lazy(() => import("./pages/courses/EQLab"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

// Each new page starts at the top. "instant" overrides the site-wide smooth
// scrolling, so the new page doesn't visibly scroll up from the old position.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <div className="w-8 h-8 rounded-full border-4 border-aqua border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AnalyticsTracker />
        <ScrollToTop />
        <WhatsAppButton />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/courses/creative-quest" element={<CreativeQuest />} />
            <Route path="/courses/loud-fearless" element={<LoudFearless />} />
            <Route path="/courses/curiosity-box" element={<CuriosityBox />} />
            <Route path="/courses/eq-lab" element={<EQLab />} />
            <Route path="/thank-you/:slug" element={<ThankYou />} />
            <Route
              path="*"
              element={
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
                    <Route path="/impact/reports" element={<Reports />} />
                    <Route path="/advocacy" element={<Advocacy />} />
                    <Route path="/partnership" element={<Partnership />} />
                    <Route path="/community-hour" element={<CommunityHour />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  );
}

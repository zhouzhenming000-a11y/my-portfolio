import GrainOverlay from "./components/GrainOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationCard from "./components/EducationCard";
import SkillsGrid from "./components/SkillsGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <ExperienceTimeline />
        <EducationCard />
        <SkillsGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Bootcamps from './components/Bootcamps';
import EnrollNow from "./components/EnrollNow";
import ResearchAndInnovation from './components/ResearchAndInnovation';
import Happenings from './components/Happenings';
import ThoughtLeadership from './components/ThoughtLeadership';
import MoUsSection from './components/MoUsSection';
import HackathonsAndInnovationChallenges from './components/HackathonsAndInnovationChallenges';
import StartupIncubatorsAndInnovationHubs from './components/StartupIncubatorsAndInnovationHubs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/research-and-innovation" element={<ResearchAndInnovation />} />
        <Route path="/happenings" element={<Happenings />} />
        <Route path="/thought-leadership" element={<ThoughtLeadership />} />
        <Route path="/mous" element={<MoUsSection />} />
        <Route path="/hackathons-innovation" element={<HackathonsAndInnovationChallenges />} />
        <Route path="/incubators-hubs" element={<StartupIncubatorsAndInnovationHubs />} />
      </Routes>
    </Router>
  );
}

export default App;

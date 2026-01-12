import React from "react";
import JourneyTimeline from "../components/AboutUs/JourneyTimeline";
import AboutSection from "../components/AboutUs/AboutSection";
import VisionMission from "../components/AboutUs/VisionMission";
import { useParams } from "react-router-dom";

function AboutUs() {
  const { lang } = useParams();
  return (
  <>
    <JourneyTimeline lang={lang}/>
    <AboutSection lang={lang}/>
    <VisionMission lang={lang}/>
  </>
);
};

export default AboutUs;


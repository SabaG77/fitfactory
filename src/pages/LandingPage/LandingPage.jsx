import { AboutUs, Home, Pilates, Pricing, Trainers } from "./components";

export const LandingPage = () => {
  return (
    <div id="landing-page">
      <Home />
      <AboutUs />
      <Pilates />
      <Trainers />
      <Pricing />
    </div>
  );
};

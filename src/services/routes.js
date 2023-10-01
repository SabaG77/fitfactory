import { LandingPage, AboutUs, News, Contact, StartTrial } from "../pages";

export const routesMap = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/start-trial",
    element: <StartTrial />,
  },
];

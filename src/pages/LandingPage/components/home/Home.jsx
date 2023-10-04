import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <section className="container">
      <div className="container-top">
        <div className="container-left">
          <div className="container-flex">
            <div className="landing-title-line"></div>
            <h1 className="landing-title">
              THE FIRST EVER MIXED MARTIAL ARTS WEBSITE TEMPLATE FOR US.
            </h1>
          </div>
          <p className="landing-text">
            Showcase your team, enlist students to classes, sell MMA products
            and grow your Mixed Martial Arts academy online.
          </p>
          <div className="btn-flex">
            <Link to="/start-trial" className="btn btn1 button-49">
              JOIN US
            </Link>
            <a href="#about-us" className="btn btn2">
              ABOUT US
            </a>
          </div>
        </div>
        <div className="container-right">
          <img
            className="landing-img"
            src={require("../../../../images/landingImg.png")}
            alt="landing-img"
          />
        </div>
      </div>
    </section>
  );
};

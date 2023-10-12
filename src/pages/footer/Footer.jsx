import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { GymMarker } from "./components";

export const Footer = () => {
  return (
    <footer className="footer" id="main-footer">
      <div className="social-media">
        <div className="social-media-top">
          <img
            className="insta-icon"
            src={require("../../images/instagram.png")}
            alt="instagram-icon"
          />
          <p className="footer-p-social">FOLLOW US ON INSTAGRAM</p>
        </div>
        <MapContainer center={[42.26950571307085, 42.67143730347168]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GymMarker />
        </MapContainer>
        <div className="social-icon">
          <div className="sc-icon-box">
            <img
              className="social-child-icon"
              src={require("../../images/insta-1.png")}
              alt="insta-icon"
            />
          </div>
          <div className="sc-icon-box">
            <img
              className="social-child-icon"
              src={require("../../images/insta-2.png")}
              alt="insta-icon"
            />
          </div>
          <div className="sc-icon-box">
            <img
              className="social-child-icon"
              src={require("../../images/insta-3.png")}
              alt="insta-icon"
            />
          </div>
          <div className="sc-icon-box">
            <img
              className="social-child-icon"
              src={require("../../images/insta-4.png")}
              alt="insta-icon"
            />
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="footer-left">
          <h5 className="footer-left-title">OPEN HOURS</h5>
          <div className="footer-left-flex">
            <p>Monday to Friday 09:00-20:00</p>
            <p>Saturday: 09:00-18:00</p>
            <p>Sunday: 09:00-18:00</p>
          </div>
        </div>
        <div className="footer-middle">
          <h4 className="footer-logo">FITFACTORY</h4>
          <div className="footer-middle-flex">
            <img
              className="footer-icon"
              src={require("../../images/insta-footer.png")}
              alt="insta-svg"
              title="instagram"
            />
            <img
              className="footer-icon footer-icon-middle"
              src={require("../../images/insta-footer-2.png")}
              alt="fb-svg"
              title="facebook"
            />
            <img
              className="footer-icon"
              src={require("../../images/insta-footer-3.png")}
              alt="tik-tok-svg"
              title="tik-tok"
            />
          </div>
        </div>
        <div className="footer-right">
          <h5 className="footer-right-title">CONTACT US</h5>
          <div className="footer-right-flex">
            <p>Fitfactory, buxaidze N17</p>
            <p>+1800-001-658</p>
            <p>fitfactory2023@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

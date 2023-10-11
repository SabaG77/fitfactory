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
        <div className="social-images">
          <div className="sc-img-box">
            <img
              className="social-child-img"
              src={require("../../images/insta-1.png")}
              alt="insta-photo"
            />
          </div>
          <div className="sc-img-box">
            <img
              className="social-child-img"
              src={require("../../images/insta-2.png")}
              alt="insta-photo"
            />
          </div>
          <div className="sc-img-box">
            <img
              className="social-child-img"
              src={require("../../images/insta-3.png")}
              alt="insta-photo"
            />
          </div>
          <div className="sc-img-box">
            <img
              className="social-child-img"
              src={require("../../images/insta-4.png")}
              alt="insta-photo"
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
              className="footer-img"
              src={require("../../images/insta-footer.png")}
              alt="insta-svg"
              title="instagram"
            />
            <img
              className="footer-img footer-img-middle"
              src={require("../../images/insta-footer-2.png")}
              alt="fb-svg"
              title="facebook"
            />
            <img
              className="footer-img"
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

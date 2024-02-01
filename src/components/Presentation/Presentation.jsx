import "./index.scss";

import ImageHeroDesktop from "../../assets/image-hero-desktop.png";
import ImageHeroTablet from "../../assets/image-hero-tablet.png";
import ImageHeroMobile from "../../assets/image-hero-mobile.png";

const Presentation = () => {
  return (
    <section className="presentation">
      {/* Title */}
      <div className="presentation-title">
        <h1 className="title">Maximize skill, minimize budget</h1>
        <p className="desc">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button type="button">Get Started</button>
      </div>

      {/* Image */}
      <div className="presentation-img">
        <img
          src={ImageHeroDesktop}
          alt="Image Hero Desktop"
          className="desktop-img"
        />
        <img
          src={ImageHeroTablet}
          alt="Image Hero Tablet"
          className="tablet-img"
        />
        <img
          src={ImageHeroMobile}
          alt="Image Hero Mobile"
          className="mobile-img"
        />
      </div>
    </section>
  );
};

export default Presentation;

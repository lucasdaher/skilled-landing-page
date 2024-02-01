import Cards from "./Cards/Cards";
import "./index.scss";

import Animation from "../../assets/icon-animation.svg";
import Design from "../../assets/icon-design.svg";
import Photography from "../../assets/icon-photography.svg";
import Crypto from "../../assets/icon-crypto.svg";
import Business from "../../assets/icon-business.svg";

const Courses = () => {
  return (
    <section className="courses">
      <div className="main-card">
        <h1 className="main-card-title">Check out our most popular courses!</h1>
      </div>

      {/* Animation */}
      <Cards
        icon={Animation}
        title="Animation"
        desc="Learn the latest animation techniques to create stunning motion design and captivate your audience."
      />

      {/* Design */}
      <Cards
        icon={Design}
        title="Design"
        desc="Create beautiful, usable interfaces to help shape the future of how the web looks."
      />

      {/* Photography */}
      <Cards
        icon={Photography}
        title="Photography"
        desc="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
      />

      {/* Crypto */}
      <Cards
        icon={Crypto}
        title="Crypto"
        desc="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
      />

      {/* Business */}
      <Cards
        icon={Business}
        title="Business"
        desc="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
      />
    </section>
  );
};

export default Courses;

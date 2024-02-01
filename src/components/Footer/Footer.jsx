import "./index.scss";

import LogoLight from "../../assets/logo-light.svg";

const Footer = () => {
  return (
    <footer>
      <img src={LogoLight} alt="Skilled Logo Light" />

      <button type="button">Get Started</button>
    </footer>
  );
};

export default Footer;

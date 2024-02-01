import "./index.scss";

import LogoDark from "../../assets/logo-dark.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={LogoDark} alt="Skilled Logo Dark" />
      </div>

      <div className="started-btn">
        <button type="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;

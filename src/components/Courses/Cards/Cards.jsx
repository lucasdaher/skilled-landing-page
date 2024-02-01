import "./index.scss";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={props.icon} alt="Icon" />
      </div>
      <div className="card-content">
        <h4 className="title">{props.title}</h4>
        <p className="desc">{props.desc}</p>
        <span className="started">Get Started</span>
      </div>
    </div>
  );
};

export default Cards;

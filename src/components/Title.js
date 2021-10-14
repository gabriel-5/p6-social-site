import logo from "./logo.png";
import phone from "./phone.png";
import heart from "./heart.png";
import bottom from "./bottomlogo.png";

const Title = () => {
  return (
    <div className="title">
      <h1 className="pleaseCall">"please call"</h1>
      <img className="logo" src={logo} />

      <img className="logo" src={phone} />

      <img className="logo" src={heart} />

      <img className="logo" src={bottom} />
    </div>
  );
};

export default Title;

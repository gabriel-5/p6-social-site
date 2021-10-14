import logo from "./logo.png";
import phone from "./phone.png";
import heart from "./heart.png";
import bottom from "./bottomlogo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <h1 className="pleaseCall">"please call"</h1>

      <img className="logo" src={logo} />
      <Link to="/">
        <img className="logo" src={phone} />
      </Link>
      <Link to="/ViewPosts">
        <img className="logo" src={heart} />
      </Link>
      <img className="logo" src={bottom} />
    </div>
  );
};

export default Title;

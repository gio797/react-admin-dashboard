import { Link } from "react-router-dom";
import "./menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link className="list-item" to="/">
          <img src="/home.svg" alt="" />
          <span className="list-item-title">Home</span>
        </Link>
        <Link className="list-item" to="/">
          <img src="/profile.svg" alt="" />
          <span className="list-item-title">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAIN</span>
        <Link className="list-item" to="/">
          <img src="/home.svg" alt="" />
          <span className="list-item-title">Home</span>
        </Link>
        <Link className="list-item" to="/">
          <img src="/profile.svg" alt="" />
          <span className="list-item-title">Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;

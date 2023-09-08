import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data.ts";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>

          {item.listItems.map((item) => (
            <Link className="list-item" to="/" key={item.id}>
              <img src={item.icon} alt="" />
              <span className="list-item-title">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

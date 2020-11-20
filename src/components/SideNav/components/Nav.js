import React, { useContext } from "react";
import { DataContext } from "../../datacontext/DataContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const { toggleMenu } = useContext(DataContext);
  const [toggle, setToggle] = toggleMenu;
  return (
    <div className="w-3/4 mx-auto lg:mx-0">
      <ul>
        <li className="my-3" onClick={() => setToggle(!toggle)}>
          <Link to="/">Home</Link>
        </li>
        <li className="my-3" onClick={() => setToggle(!toggle)}>
          <Link to="/about">About</Link>
        </li>
        <li className="my-3" onClick={() => setToggle(!toggle)}>
          <Link to="/recent">Recent Games</Link>
        </li>
        <li className="my-3" onClick={() => setToggle(!toggle)}>
          <Link to="/topgames">Top Games</Link>
        </li>
        <li className="my-3" onClick={() => setToggle(!toggle)}>
          <Link to="/allgames">All Games</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

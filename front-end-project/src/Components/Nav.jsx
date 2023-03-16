import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";
import "./Home/Home.scss";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <div class="container">
        <div class="logo">Logo</div>
        <ul class="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          {currentUser ? (
            <>
              <li>{currentUser.username}</li>
              <li class="nav-item">
                <a href="/login" onClick={logOut}>
                  {" "}
                  Logut
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login"> login </a>
              </li>
              <li>
                <a href="/register"> Register </a>
              </li>
            </>
          )}

          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="/register">hamada</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

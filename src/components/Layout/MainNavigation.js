import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store of browser provider/auth-context";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    localStorage.clear();
    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Wallet and Note</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <Link to="/choosePage">{authCtx.userData.email} </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/choosePage">Main Page</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
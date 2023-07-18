import AppTitle from "../AppTitle/AppTitle";
import "./Nav.scss";

function Nav() {
  return (
    <div id="nav_bar">
      <AppTitle />
      <div id="navLink_container">
        <div>Dashboard</div>
        <div>Se connecter</div>
      </div>
    </div>
  );
}

export default Nav;

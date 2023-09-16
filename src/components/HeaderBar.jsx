import Logo from "../img/tv.png";
import MenuIcon from "../svg/nav-logo-notext.svg";

import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div className="header__bar">
      <div className="logo">
        <Link to="/">
          <img className="logo__img" src={Logo} alt="logo" />
        </Link>
        <div className="logo__name">MovieBox</div>
      </div>

      <SearchInput />

      <div className="menu">
        <div className="sign-in">Sign in</div>
        <img className="menu__icon" src={MenuIcon} alt="menu icon" />
      </div>
    </div>
  );
}

export default HeaderBar;

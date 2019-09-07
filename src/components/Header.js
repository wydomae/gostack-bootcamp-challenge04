import React from "react";

import fb from "../../assets/fb.svg";
import profile from "../../assets/profile.jpg";

function Header() {
  return (
    <div id="header">
      <img className="logo" src={fb} alt="Facebook Logo" />
      <div className="profileInfo">
        <strong>Meu Perfil</strong>
        <img className="userImg" src={profile} alt="Profile" />
      </div>
    </div>
  );
}

export default Header;

import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <li>Home</li>
      <a
        href="https://www.linkedin.com/in/ajinkya-pande-0b7285199/"
        target="_blank"
      >
        <img
          className="linkedin"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />
      </a>
      <a href="https://github.com/ajinkyapande98" target="_blank">
        <img
          className="github"
          src="https://cdn-icons-png.flaticon.com/512/3488/3488426.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default Navbar;

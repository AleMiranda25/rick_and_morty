import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { BsFillHouseFill, BsHeartFill, BsFillBookFill } from "react-icons/bs";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.topnav}>
      <a href="" className={styles.active}>
        <BsFillHouseFill /> Home{" "}
      </a>
      <a href="">
        <BsFillBookFill /> About{" "}
      </a>
      <a href="">
        <BsHeartFill /> Favorites{" "}
      </a>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;

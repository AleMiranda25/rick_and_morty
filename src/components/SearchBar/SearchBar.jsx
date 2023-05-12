import styles from "./SearchBar.module.css";
import { BsSearchHeart } from "react-icons/bs";

export default function SearchBar(props) {
  const { onSearch } = props;
  return (
    <div className={styles.topnav}>
      <a className={styles.active}>Home</a>
      <a>About</a>
      <a>Favorites</a>
      <button onClick={onSearch}>
        <BsSearchHeart />
      </button>
      <input type="search" placeholder="Search" />
    </div>
  );
}

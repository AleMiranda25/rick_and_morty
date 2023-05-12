import { useState } from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const onClear = () => {
    setId("");
  };

  return (
    <div className={styles.searchBar}>
      <button
        onClick={() => {
          onSearch(id);
          onClear();
        }}
      >
        <BsSearch />
      </button>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="Search"
      />
    </div>
  );
}

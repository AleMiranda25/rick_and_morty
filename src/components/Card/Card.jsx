import styles from "./Card.module.css";

export default function Card(props) {
  const { id, name, /*status,*/ species, gender, /*origin,*/ image, onClose } =
    props;
  console.log(props);
  return (
    <div className={styles.cardContainer}>
      <button className={styles.btnClose} onClick={() => onClose(id)}>
        X
      </button>
      <img src={image} alt="Tarjeta Personaje" />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.infoContainer}>
        {/* <h2>{status}</h2> */}
        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>{origin}</h2> */}
      </div>
    </div>
  );
}

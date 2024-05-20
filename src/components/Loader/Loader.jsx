import styles from "./cssLoader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.load}></div>
    </div>
  );
};

export default Loader;

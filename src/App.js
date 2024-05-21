import "./css/index.css";
import Header from "./components/Header/Header";
import styles from "./app.module.css";
import Form from "./components/Form/Form";
import RightImage from "./assets/right.png";

function App() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.body_container}>
        <Form />
        <div className={styles.right}>
          <img src={RightImage} alt="img" />
        </div>
      </section>
    </main>
  );
}

export default App;

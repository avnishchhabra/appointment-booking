import React, { useState } from "react";
import styles from "./header.module.css";
import { useMediaQuery } from "react-responsive";
import Hamburger from "../../assets/Hamburger";
import ShareLink from "../ShareLink/ShareLink";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <header className={styles.header_wrapper}>
        <div className={styles.header_container}>
          <div className={styles.header_left}>
            <div className={styles.logo_container}>
              <a href="/">
                <img src={LogoImage} className={styles.logo_image} alt="img" />
              </a>
            </div>
          </div>
          {isMobile ? (
            <button className={styles.btn_container} onClick={handleMenu}>
              <Hamburger size={20} />
            </button>
          ) : (
            <nav className={styles.nav_container}>
              <div className={styles.desktop_nav_list}>
                <a href="/" className={styles.nav_link}>
                  Home
                </a>
                <a href="/" className={styles.nav_link}>
                  Contact
                </a>
                <ShareLink />
              </div>
            </nav>
          )}
        </div>
      </header>
      {isMobile && (
        <nav className={`${styles.mobile_menu} ${openMenu ? styles.show : ""}`}>
          <div className={styles.nav_mobile_list}>
            <a href="/" className={styles.nav_link}>
              Home
            </a>
            <a href="/" className={styles.nav_link}>
              Contact
            </a>

            <ShareLink />
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;

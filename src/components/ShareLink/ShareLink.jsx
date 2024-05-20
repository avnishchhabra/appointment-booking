import React from "react";
import styles from "./link.module.css";
import Share from "../../assets/Share";

const ShareLink = () => {
  return (
    <p href="/" target="_blank" className={styles.copy_btn}>
      <Share /> Share Link
    </p>
  );
};

export default ShareLink;

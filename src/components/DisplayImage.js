import React from "react";
import styles from "../styles/Home.module.css";

const DisplayImage = ({ uploadedImage, colorPalette }) => {
  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded" />
        ) : (
          <h2>Put an image here..</h2>
        )}
      </div>
    </div>
  );
};

export default DisplayImage;

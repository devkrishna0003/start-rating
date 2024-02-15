import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarComponent.module.css";
import { useState } from "react";

const StarComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleOnclick(index) {
    setRating(index);
  }
  function handleMouseMove(index) {
    setHover(index);
  }
  function handleMouseLeave(index) {
    setHover(rating);
  }
  return (
    <div className={styles.starContainer}>
      {[...Array(10)].map((_, index) => (
        <FaStar
          onClick={() => handleOnclick(index)}
          onMouseMove={() => handleMouseMove(index)}
          onMouseLeave={() => handleMouseLeave()}
          size={40}
          key={index}
          className={`${styles.star} ${
            index <= (hover || rating) ? styles.active : styles.inactive
          }`}
        />
      ))}
    </div>
  );
};

export default StarComponent;

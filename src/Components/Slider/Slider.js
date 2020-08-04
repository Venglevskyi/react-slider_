import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { fetchImages } from "../../services/fetchImages";

import styles from "./slider.module.css";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchImages()
      .then((data) => setImages(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <p>Loading image</p>}
      {images.length > 0 && !loading && (
        <Carousel controls={false}>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <div className={styles.imageBlock}>
                <img
                  className={styles.image_slider}
                  src={image.webformatURL}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export { Slider };

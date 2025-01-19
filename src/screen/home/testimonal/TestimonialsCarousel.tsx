import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import styles from "./Testimonials.module.css";
import { Box, containerClasses, Stack } from "@mui/material";
import Image from "./../../../assests/imagecard.png";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
      author: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
      author: "Chris Bums",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
      author: "Chris",
      role: "CTO, Example Corp, UK",
      rating: 5,
    },
    {
      id: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
      author: "Jane Smith",
      role: "Manager, Business Inc, Australia",
      rating: 4,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className={styles.ratingStars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${styles.star} ${
              star <= Math.floor(rating)
                ? styles.starFull
                : star - rating <= 0.5
                ? styles.starHalf
                : styles.starEmpty
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Box className={styles.container}>
      <Stack className={styles.containerhead}>
        {" "}
        <Stack className={styles.title}>What people say about us</Stack>
        <Stack className={styles.containe_scroll_btn_lay}>
          <button
            onClick={handlePrevSlide}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNextSlide}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <ChevronRight />
          </button>
        </Stack>
      </Stack>

      <Box className={styles.carouselContainer}>
        <Box className={styles.carousel}>
          <Box className={styles.carouselTrack}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={testimonial.id}
                className={`${styles.slide} ${
                  index === currentSlide || index === currentSlide + 1
                    ? styles.activeSlide
                    : styles.hiddenSlide
                }`}
              >
                <Box className={styles.testimonialCard}>
                  <Box className={styles.ratingContainer}>
                    <RatingStars rating={testimonial.rating} />
                  </Box>
                  <blockquote className={styles.testimonialText}>
                    "{testimonial.text}"
                  </blockquote>
                  <Box className={styles.authorInfo}>
                    <Box className={styles.authorImage}>
                      <img src={Image} alt={testimonial.author} />
                    </Box>
                    <Box className={styles.authorDetails}>
                      <Box className={styles.authorName}>
                        {testimonial.author}
                      </Box>
                      <Box className={styles.authorRole}>
                        {testimonial.role}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className={styles.indicators}>
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
          (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === Math.floor(currentSlide / 2)
                  ? styles.activeIndicator
                  : ""
              }`}
              onClick={() => setCurrentSlide(index * 2)}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;

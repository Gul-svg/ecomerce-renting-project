"use client"
import React from "react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => {
  return (
    <div>
      {" "}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Carousel;

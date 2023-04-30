import star1 from "@assets/one-star.webp";
import stars2 from "@assets/two-stars.webp";
import stars3 from "@assets/three-stars.webp";
import stars4 from "@assets/four-stars.webp";
import stars5 from "@assets/five-stars.webp";

export const starsRate = new Map([
  [1, { src: star1, alt: "*" }],
  [2, { src: stars2, alt: "* *" }],
  [3, { src: stars3, alt: "* * *" }],
  [4, { src: stars4, alt: "* * * *" }],
  [5, { src: stars5, alt: "* * * * *" }],
]);

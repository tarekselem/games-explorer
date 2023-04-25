import star1 from "@assets/one-star.png";
import stars2 from "@assets/two-stars.png";
import stars3 from "@assets/three-stars.png";
import stars4 from "@assets/four-stars.png";
import stars5 from "@assets/five-stars.png";

export const starsRate = new Map([
  [1, { src: star1, alt: "*" }],
  [2, { src: stars2, alt: "* *" }],
  [3, { src: stars3, alt: "* * *" }],
  [4, { src: stars4, alt: "* * * *" }],
  [5, { src: stars5, alt: "* * * * *" }],
]);

import bullsEye from "@assets/bulls-eye.webp";
import thumbsUp from "@assets/thumbs-up.webp";
import meh from "@assets/meh.webp";

export const emojis = new Map([
  [3, { src: meh, alt: "meh" }],
  [4, { src: thumbsUp, alt: "recommended" }],
  [5, { src: bullsEye, alt: "exceptional" }],
]);

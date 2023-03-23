import noImagePlaceholder from "@assets/no-image-placeholder.webp";
export const getCroppedImageUrl = (
  url: string,
  width = 600,
  height = 400
): string => {
  if (!url) return noImagePlaceholder;

  const urlParts = url.split("media/");
  return `${urlParts[0]}media/crop/${width}/${height}/${urlParts[1]}`;
};

export default { getCroppedImageUrl };

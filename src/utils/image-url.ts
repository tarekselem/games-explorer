export const getCroppedImageUrl = (
  url: string,
  width = 600,
  height = 400
): string => {
  //https://api.rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
  const urlParts = url.split("media/");
  return `${urlParts[0]}media/crop/${width}/${height}/${urlParts[1]}`;
};

export default { getCroppedImageUrl };

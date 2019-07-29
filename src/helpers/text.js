export const shortenText = (text, length = 200) => {
  if (text.length >= length) {
    return text.slice(0, length - 3) + "...";
  }
  return text;
};

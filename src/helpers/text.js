export const shortenText = (text, length = 200) =>
  text.length >= length ? text.slice(0, length - 3) + "..." : text;

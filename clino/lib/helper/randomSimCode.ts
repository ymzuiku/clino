export const randomSimCode = () => {
  return Math.random().toString().replace("0.", "").slice(1, 7);
};

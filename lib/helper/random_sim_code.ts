export const random_sim_code = () => {
  return Math.random().toString().replace("0.", "").slice(1, 7);
};

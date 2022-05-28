export const shiffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

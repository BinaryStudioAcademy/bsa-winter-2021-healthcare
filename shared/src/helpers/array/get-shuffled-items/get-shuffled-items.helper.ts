const RANDOM_SEPARATOR = 0.5;

const getShuffledItems = <T>(items: T[]): T[] => {
  const shuffledArray = items
    .slice()
    .sort(() => Math.random() - RANDOM_SEPARATOR);
  return shuffledArray;
};

export { getShuffledItems };

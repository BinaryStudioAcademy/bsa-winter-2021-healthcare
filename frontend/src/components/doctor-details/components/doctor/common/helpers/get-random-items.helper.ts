const getRandomItems = <T>(items: T[], count: number): T[] => {
  const shuffledItems = items.sort(() => 0.5 - Math.random());
  return shuffledItems.slice(0, count);
};

export { getRandomItems };

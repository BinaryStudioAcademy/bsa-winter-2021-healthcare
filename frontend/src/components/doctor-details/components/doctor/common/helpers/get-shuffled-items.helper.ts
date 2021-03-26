const getshuffledItems = <T>(items: T[]): T[] => {
  return items.sort(() => 0.5 - Math.random());
};

export { getshuffledItems };

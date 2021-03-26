import { getshuffledItems } from './get-shuffled-items.helper';

const getRandomItems = <T>(items: T[], count: number): T[] => {
  const shuffledItems = getshuffledItems(items);
  return shuffledItems.slice(0, count);
};

export { getRandomItems };

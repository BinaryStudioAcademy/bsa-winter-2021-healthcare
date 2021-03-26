import { getShuffledItems } from '~/helpers/array';

const RANDOM_ITEMS_START_IDX = 0;
const getRandomItems = <T>(items: T[], count: number): T[] => {
  const randomItems = getShuffledItems(items).slice(
    RANDOM_ITEMS_START_IDX,
    count,
  );
  return randomItems;
};
export { getRandomItems };

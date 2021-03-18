const getTruthyEntities = <T>(...entities: T[]): T[] => {
  return entities.filter(Boolean)
};

export { getTruthyEntities };

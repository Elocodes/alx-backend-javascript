// returns an updated map for all items with initial quantity at 1.
export default function updateUniqueItems(lists) {
  if (!(lists instanceof Map)) {
    throw new Error('cannot process');
  }
  for (const [key, val] of lists) {
    if (val === 1) {
      lists.set(key, 100);
    }
  }
  return lists;
}

//  returns a string of all the set values that start with a specific string (startString)
export default function cleanSet(set, startString) {
  const holder = [];
  if (!set || !(set instanceof Set) || !startString || (typeof startString !== 'string')) {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      holder.push(item.slice(startString.length));
    }
  }
  return holder.join('-');
}

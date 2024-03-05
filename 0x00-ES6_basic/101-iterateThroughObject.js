export default function iterateThroughObject(reportWithIterator) {
  const myArr = Array.from(reportWithIterator);
  const employees = myArr.join(' | ');
  return employees;
}

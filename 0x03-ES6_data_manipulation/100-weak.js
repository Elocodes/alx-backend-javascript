export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let numberOfCalls = weakMap.get(endpoint) || 0;
  numberOfCalls += 1;
  if (numberOfCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, numberOfCalls);
}

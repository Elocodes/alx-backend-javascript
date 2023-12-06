// create a function called createInt8TypedArray that returns a new
// ArrayBuffer with an Int8 (8-bit integer) value at a specific position.
// The function should accept three arguments:
// length (the total length of the ArrayBuffer),
// position (the position where the Int8 value should be added),
// and value (the Int8 value to be added).
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('position outside range');
  }
  const buffer = new ArrayBuffer(length);
  // create new dataview to work with the arraybuffer
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  return dataView;
}

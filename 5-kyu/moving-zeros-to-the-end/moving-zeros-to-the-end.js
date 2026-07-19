function moveZeros(arr) {
  const result = [];
  const zero = [];
  arr.forEach(i => {
    if (i === 0) return zero.push(i);
    result.push(i);
  })
  return [...result, ...zero];
}
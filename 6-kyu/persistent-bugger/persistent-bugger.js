function persistence(num) {
  num = num.toString();
  let time = 0;
  while (num.length !== 1) {
    num = num.split('').map(Number);
    const result = num.reduce((r, n) => r * n, 1);
    time += 1;
    num = result.toString();
  }
  return time;
}
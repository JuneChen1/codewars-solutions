function ipsBetween(start, end){
  start = start.split('.');
  const result = end.split('.').map((v, i) => v - start[i]);
  
  return result.reduce((acc, v, i) => acc += v * Math.pow(256, 3 - i), 0);
}
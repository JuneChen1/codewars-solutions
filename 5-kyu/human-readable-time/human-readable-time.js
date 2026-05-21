function humanReadable (seconds) {
  const hours = Math.floor(seconds/3600);
  seconds -= hours * 3600;
  
  const minutes = Math.floor(seconds/60);
  const result = [hours, minutes, seconds % 60];
  
  result.forEach((item, index) => {
    if (String(item).length < 2) {
      result[index] = '0' + String(item);
    }
  })
  
  return result.join(':');
}
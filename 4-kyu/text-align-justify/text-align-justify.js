function justify(text, width) {
  const words = text.split(' ');
  const lines = [];
  let oneLine = [];
  let length = 0;
  
  words.forEach(word => {
    const spaceNeeded  = oneLine.length !== 0 ? 1 : 0;
    if (length + spaceNeeded + word.length > width) {
      lines.push([...oneLine]);
      oneLine = [word];
      length = word.length;
    } else {
      length += spaceNeeded + word.length;
      oneLine.push(word);
    }
  })
  
  if (oneLine.length !== 0) lines.push([...oneLine]);
  
  return lines.map((line, index) => {
    if (index === lines.length - 1 || line.length === 1) {
      return line.join(' ');
    }
    const totalSpaces = width - line.join('').length;
    const gaps = line.length - 1;
    const eachGap = Math.floor(totalSpaces / gaps);
    let restSpace = totalSpaces % gaps;
    let result = '';
    
    line.forEach((item, index) => {
      let currentSpace = eachGap;
      if (index === 0) {
        result += item;
        return
      } 
      if (restSpace > 0) {
        currentSpace += 1;
        restSpace -= 1;
      }
      result += ' '.repeat(currentSpace);
      result += item;
    })
    
    return result;
  }).join('\n');
}
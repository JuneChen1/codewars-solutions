function score( dice ) {
  const dicePoint = ['1', '2', '3', '4', '5', '6'];
  const counts = {};
  let points = 0;
  
  dice.forEach(item => {
    item = String(item);
    if (counts[item] !== undefined) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  });
  
  dicePoint.forEach(item => {
    if (counts[item] >= 3) {
      if (item === '1') {
        points += 1000;
      } else {
        points += Number(item) * 100;
      }
      counts[item] -= 3;
    }
  });
  
  if (counts['1'] !== undefined && counts['1'] !== 0) {
    points += 100 * counts['1'];
  };
  
  if (counts['5'] !== undefined && counts['5'] !== 0) {
    points += 50 * counts['5'];
  };
  
  return points;
}
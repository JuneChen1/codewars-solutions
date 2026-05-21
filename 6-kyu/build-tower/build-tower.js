function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (_, i) => i + 1)
    .map(count => {
      const text = '*'.repeat(count * 2 - 1);
​
      return ' '.repeat(nFloors - count) + text + ' '.repeat(nFloors - count);
    })
}
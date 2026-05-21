function alphabetPosition(text) {
  const result = text.replace(/[^a-zA-Z]/g, '').split('').map(letter => {
    return letter.toLowerCase().charCodeAt() - 96;
  })
  return result.join(' ');
}
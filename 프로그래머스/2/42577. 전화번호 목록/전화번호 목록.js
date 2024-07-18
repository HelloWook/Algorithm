function solution(phone_book) {
  const hash = new Map();

  for (let i = 0; i < phone_book.length; i++) {
    hash.set(phone_book[i], true);
  }
  for (let i = 0; i < phone_book.length; i++) {
    let phone = phone_book[i];
    for (let j = 1; j < phone.length; j++) {
      if (hash.has(phone.slice(0, j))) {
        return false;
      }
    }
  }
  return true;
}

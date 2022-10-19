const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const resultHcaracters = function generateKey(length, characters) {
  let addCharacter = "";

  for (let i = 0; i < length; i++) {
    const randomNumber =
      Math.floor(Math.random() * characters.length)  ;
    addCharacter += characters[randomNumber];
  }
  return addCharacter;
};
console.log('\nTask 6.2');
console.log(`${resultHcaracters(10, characters)}\n`);

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const resultHcaracters = function generateKey(length, characters) {
  let addCharacter = "";

  for (let i = 0; i < length; i++) {
    const randomNumber =
      Math.floor(Math.random() * (characters.length - 0)) + 0;
    addCharacter += characters[randomNumber];
  }
  return addCharacter;
};

console.log(resultHcaracters(10, characters));

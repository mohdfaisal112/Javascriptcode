function reverseWords(sentence) {
  const words = sentence.split(" ");
  let reversedSentence = "";

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      reversedSentence += " ";
    }

    const word = words[i];
    const reversedWord = word.split("").reverse().join("");
    reversedSentence += reversedWord;
  }

  return reversedSentence;
}

const inputSentence = "This is my bike";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
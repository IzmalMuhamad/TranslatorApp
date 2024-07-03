//from the challenge, what I understand is to send a message with correct source language setting to be translated to the target language.
//if source language != message, its false.
//if source language setting == target language, its false.
//both conditions above must be true to return the translated message.

const translation = {
  "malay": {
    "morning": "pagi"
  },
  "english": {
    "pagi": "morning"
  },
}

export function translate(sourceLanguage, targetLanguage, textToTranslate) {
  const wordExist = translation[targetLanguage][textToTranslate];
  const isCorrectPair = translation[sourceLanguage][wordExist];
  const isSameLanguage = sourceLanguage == targetLanguage;

  console.log(wordExist);
  console.log(isCorrectPair);

  let result = "";

  if (isCorrectPair && !isSameLanguage) {
    result = wordExist;
  } else {
    alert("Something is wrong. Please check your text input and both language selections.");
    result = "I am confused";
  }

  return result;
}
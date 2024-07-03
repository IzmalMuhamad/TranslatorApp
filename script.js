import {translate} from './translator.js';

function translateText(){
  const languageElement1 = document.getElementById('sourceLanguage');
  const languageElement2 = document.getElementById('targetLanguage');
  const textElement = document.getElementById('inputMessage');

  
  const sourceLanguage = languageElement1.value;
  const targetLanguage = languageElement2.value;
  const textToTranslate = textElement.value;

  const translated = translate(sourceLanguage.toLowerCase(), targetLanguage.toLowerCase(),textToTranslate.toLowerCase());

  const inputMessage = document.getElementById('textToTranslate');
  inputMessage.value = textToTranslate;
  const translatedTextElement = document.getElementById('translatedText');
  translatedTextElement.value = translated;
}

window.translateText = translateText;
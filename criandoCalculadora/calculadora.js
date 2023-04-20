let resultElement = document.getElementById('result');

function appendCharacter(character) {
  resultElement.value += character;
}

function clearResult() {
  resultElement.value = '';
}

function deleteLastCharacter() {
  resultElement.value = resultElement.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultElement.value = eval(resultElement.value);
  } catch (error) {
    resultElement.value = 'Erro';
  }
}

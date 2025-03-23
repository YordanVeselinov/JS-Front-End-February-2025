function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let text = inputElement.value;
  let sentences = text.split('.')
    .filter(s => s.length > 0)
    .map(s => s.trim())
    .map(s => s + '.');

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphSentences = sentences.slice(i, i + 3);
    let paragraph = document.createElement('p');
    paragraph.textContent = paragraphSentences.join(' ');
  outputElement.appendChild(paragraph);
  }
}

function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  
  let words = text.toLowerCase().split(' ');
  let result = '';
  
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  if (namingConvention === 'Camel Case') {
    result = capitalizedWords[0].toLowerCase() + capitalizedWords.slice(1).join('');
  } else if (namingConvention === 'Pascal Case') {
    result = capitalizedWords.join('');
  } else {
    result = 'Error!';
  }
  
  document.getElementById('result').textContent = result;
}

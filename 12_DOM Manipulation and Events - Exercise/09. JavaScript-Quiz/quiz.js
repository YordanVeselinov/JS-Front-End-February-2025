document.addEventListener('DOMContentLoaded', solve);

function solve() {
  let questions = document.querySelectorAll('.question');
  let resultsDiv = document.getElementById('results');
  let quizTitle = document.querySelector('h1');

  let correctAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  let currentQuestion = 0;
  let rightAnswers = 0;

  questions[currentQuestion].classList.remove('hidden');

  document.querySelectorAll('.quiz-answer').forEach(answer => {
    answer.addEventListener('click', function () {
      if (this.textContent === correctAnswers[currentQuestion]) {
        rightAnswers++;
      }

      questions[currentQuestion].classList.add('hidden');
      currentQuestion++;

      if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.remove('hidden');
      } else {
        showResults();
      }
    });
  });

  function showResults() {
    let message;
    if (rightAnswers === questions.length) {
      message = 'You are recognized as top JavaScript fan!';
    } else {
      message = `You have ${rightAnswers} right ${rightAnswers === 1 ? 'answer' : 'answers'}`;
    }

    resultsDiv.textContent = message;
    resultsDiv.style.display = 'block';

    quizTitle.textContent = 'JavaScript Quiz';

  }
}
// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Function to generate a random math question with options
function generateMathQuestion() {
  const operators = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let question, answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case '-':
      answer = num1 - num2;
      question = `${num1} - ${num2}`;
      break;
    case '*':
      answer = num1 * num2;
      question = `${num1} * ${num2}`;
      break;
    case '/':
      // Ensure num2 is not zero and division is integer
      num2 = num2 === 0 ? 1 : num2;
      const dividend = Math.floor(num1 / num2) * num2;
      question = `${dividend} / ${num2}`;
      answer = dividend / num2;
      break;
  }

  const correctAnswer = Math.round(answer);
  const options = new Set([correctAnswer]);

  while (options.size < 4) {
    const variation = Math.floor(Math.random() * 11) - 5; // -5 to +5
    options.add(correctAnswer + variation);
  }

  const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);
  return { question, correctAnswer, options: shuffledOptions };
}

// Set up EJS views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from /public if needed
app.use(express.static(path.join(__dirname, 'public')));

// Render the quiz page
app.get('/', (req, res) => {
  res.render('index');
});

// Endpoint to get a math question
app.get('/math-question', (req, res) => {
  const mq = generateMathQuestion();
  res.json(mq);
});

app.listen(port, () => {
  console.log(`Math Quiz server listening at http://localhost:${port}`);
});

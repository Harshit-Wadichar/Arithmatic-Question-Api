# API (explanation):

An api which can run seperatly (by writing node server.js on terminal) and you can get questions and ans in seperate html or react app using the following function 

 async function getMathQuestion() { 
        try {
            const response = await fetch('http://localhost:3000/math-question');
            if (!response.ok) {
                throw new Error(HTTP error! status: ${response.status});
            }
            const data = await response.json();                                                                                                               question = data.question; 
            correctAnswer = data.correctAnswer;                                                                                                              options= data.options;  } catch (error) {
            console.error('Error fetching the math question:', error);
        }
    } 

# Math Quiz App (Single-File Edition)

A self-contained Express server that serves both the HTML quiz page and a JSON API for random math questions—all from one `server.js`.

---

## Features

- **All-in-one file**: No separate templates or static folders—everything is embedded in `server.js`.
- **Random questions**: Generates arithmetic problems using addition, subtraction, multiplication, and integer division.
- **Multiple-choice options**: Presents four choices (one correct answer and three distractors) shuffled randomly.
- **Instant feedback**: Displays “Correct!” or “Wrong” immediately after selecting an option.
- **Modern look**: Uses simple CSS for a centered card layout with smooth button interactions.

---

## How It Works

1. **Startup**  
   The Express app listens on port 3000 and defines two routes:
   - `/` serves the quiz page (HTML, CSS and client-side JavaScript are all sent inline).
   - `/math-question` returns a freshly generated question in JSON format.

2. **Question Generation**  
   Each request to `/math-question` triggers:
   - Random selection of two numbers and an operator.
   - Ensuring integer results for division.
   - Creation of three additional “nearby” answer options.
   - Shuffling of options before sending them back.

3. **Client-Side Logic**  
   When the user clicks **Load Question**, the browser:
   - Fetches a JSON object from `/math-question`.
   - Renders the question text and four answer buttons.
   - Displays feedback in green for correct answers or red for incorrect ones.

---

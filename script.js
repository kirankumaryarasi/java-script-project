let timeLeft = 60;
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            submitQuiz(); // Automatically submit the quiz when time runs out
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerId); // Stop the timer

    let score = 0;
    const correctAnswers = {
        question1: "Paris",
        question2: "JavaScript",
        question3: "Cascading Style Sheets",
        question4: "ul",
        question5: "1995"
    };

    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
        }
    }

    // Display the score
    document.getElementById("quiz-form").innerHTML = `<h2>Your score: ${score}/5</h2>`;
}

window.onload = startTimer; // Start the timer when the page loads
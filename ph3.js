function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim();
        const feedbackElement = document.getElementById(`feedback${index}`);

        if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
            score++;
            feedbackElement.textContent = 'Correct!';
            feedbackElement.className = 'correct';
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is ${q.correctAnswer}.`;
            feedbackElement.className = 'incorrect';
        }
    });

    // Display the score
    document.getElementById('result').textContent = `Your score: ${score} / ${questions.length}`;
}

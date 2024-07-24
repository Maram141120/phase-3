const quizContainer = document.getElementById('quizContainer');

questions.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <p>${q.question}</p>
        <input type="text" id="answer${index}" placeholder="Your answer">
        <span id="feedback${index}"></span>
    `;
    quizContainer.appendChild(questionElement);
});

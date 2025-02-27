let questions = [
    "Do you shop at supermarkets regularly?",
    "Are you a SmartCart Clubcard member?",
    "Would you be interested in exclusive discounts?",
    "Do you prefer online grocery shopping?"
];
let currentQuestion = 0;

function startSurvey() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('survey-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestion];
    document.getElementById('question-number').innerText = currentQuestion + 1;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('survey-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
    }
}

function checkBox(box) {
    box.style.background = "gold";
    setTimeout(() => {
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('win-screen').style.display = 'block';
    }, 1000);
}

function claimPrize() {
    document.getElementById('win-screen').style.display = 'none'; 
    document.getElementById('backdrop').style.display = 'none';   
}
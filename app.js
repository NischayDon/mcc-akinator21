const features = [
    {"name": "Shahrukh Khan", "human": True, "Female": False, "youtuber": False, "movie": True , "fictional": False, "inventor": False, "indian": True},
    {"name": "Priyanka Chopra", "human": True, "Female": True, "youtuber": False, "movie": True , "fictional": False, "inventor": False, "indian": True},
    {"name": "Chris Hemsworth", "human": True, "Female": False, "youtuber": False, "movie": True , "fictional": False, "inventor": False, "indian": False},
    {"name": "Ariana Grande", "human": True, "Female": True, "youtuber": False, "movie": True , "fictional": False, "inventor": False, "indian": False},
    {"name": "CV Raman", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": True},
    {"name": "Janaki Ammal", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": True},
    {"name": "Isaac Newton", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": False},
    {"name": "Marie Curie", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False,"inventor": True, "indian": False},
    {"name": "Carry Minati (Ajey Nagar)", "human": True, "Female": False, "youtuber": True, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Mostly Sane (Prajakta Koli)", "human": True, "Female": True, "youtuber": True, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "PewDiePie", "human": True, "Female": False, "youtuber": True, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Jenna Marbles", "human": True, "Female": True, "youtuber": True, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Mogli", "human": False, "Female": False, "youtuber": False, "movie": True, "fictional": True, "inventor": False, "indian": True},
    {"name": "Jasmin", "human": False, "Female": True, "youtuber": False, "movie": True, "fictional": True, "inventor": False, "indian": True},
    {"name": "Hiccup Horrendous Haddock", "human": False, "Female": False, "youtuber": False, "movie": True, "fictional": True, "inventor": False, "indian": False},
    {"name": "Ariel", "human": False, "Female": True, "youtuber": False, "movie": True, "fictional": True, "inventor": False, "indian": False},
    {"name": "Lal Bahadur Shastri", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Indira Gandhi", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Barack Obama", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Angela Merkel", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Elon Musk", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": False},
    {"name": "Rosa Parks", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Bill Gates", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": False},
    {"name": "Emma Watson", "human": True, "Female": True, "youtuber": False, "movie": True, "fictional": False, "inventor": False, "indian": False},
    {"name": "Narendra Modi", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Neymar Jr.", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Sundar Pichai", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Taylor Swift", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Albert Einstein", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": False},
    {"name": "Mother Teresa", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Sachin Tendulkar", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Leonardo da Vinci", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": False},
    {"name": "Serena Williams", "human": True, "Female": True, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": False},
    {"name": "Mahatma Gandhi", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": False, "indian": True},
    {"name": "Srinivasa Ramanujan", "human": True, "Female": False, "youtuber": False, "movie": False, "fictional": False, "inventor": True, "indian": True},
];

const POINTS = {
    "yes": 2,
    "probably": 1,
    "don't know": 0,
    "probably not": -1,
    "no": -2
};

document.getElementById("start-button").addEventListener("click", startGame);
document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.getAttribute("data-answer");
        sendAnswer(answer);
    });
});

let currentQuestionIndex = 0;
const questions = [
    "Is your character human?",
    "Is your character female?",
    "Is your character a YouTuber?",
    "Is your character in a movie?",
    "Is your character fictional?",
    "Is your character an inventor?",
    "Is your character Indian?"
];

function startGame() {
    console.log("Game started");
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    askQuestion();
}

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestionIndex];
        console.log("Asking question:", questions[currentQuestionIndex]);
    } else {
        fetchResult();
    }
}

function sendAnswer(answer) {
    console.log("Answer received:", answer);
    guessMyCharacter(answer, questions[currentQuestionIndex]);
    currentQuestionIndex++;
    askQuestion();
}

function guessMyCharacter(answer, key) {
    const pointValue = POINTS[answer];
    console.log("Point value for answer:", pointValue);
    features.forEach(character => {
        if (character[key]) {
            character.score += pointValue;
        } else {
            character.score -= pointValue;
        }
    });
    console.log("Updated features scores:", features);
}

function fetchResult() {
    features.sort((a, b) => b.score - a.score);
    if (features[0].score > 0) {
        showResult(features[0].name);
    } else {
        showResult("No matching character found.");
    }
}

function showResult(result) {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = "Your character is " + result;
    console.log("Result:", result);
}

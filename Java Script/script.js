const quizData =[
    {
        question: "Who is the prime Minister of India?",
        a: 'Pt. Jawaharlal Nehru',
        b: 'Naradra Modi',
        c: 'Rahul Gandhi',
        d: 'Amit shah',
        correct: 'b'
    },
    {
        question: "Who made this website?",
        a: 'Arman',
        b: 'Arvind Kejrival',
        c: 'Rohit singh',
        d: 'Anupam',
        correct: 'c'
    },
    {
        question: "What is the full form of USB?",
        a: 'Universal Serial Bus',
        b: 'Universal Sequential Bus',
        c: 'Unique Serial Bus',
        d: 'Unique Sequential Bus',
        correct: 'a'
    },
    {
        question: "What is the most used programming language in 2019?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: "Which of the following are the two main components of the CPU?",
        a: 'Control unit and registers',
        b: 'ALU and bus',
        c: 'Control Unit and ALU',
        d: 'Registers and main memory',
        correct: 'b'
    }
];


// const answers=[];

const questionEl = document.getElementById('question');
const  a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('end-test');
const NextBtn = document.getElementById('next');
const PrevBtn = document.getElementById('prev');
const Mor = document.getElementById('mor');
const answerEls = document.querySelectorAll('.answer');


let currentQuestion = 0;
let score = 0;


// ---------------------arrays------------------

var answerSelected = [];


// ---------------Method--------------

var stop = setInterval(updateCountdown, 1000);
loadQuiz();
linksQuestion();


// -----------functions-----------------


function loadQuiz() { 

    deselectAnswers();

    const currentQuizData =quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
}

// function colorLinks() {
//     linksEl = document.getElementsByClassName('.links');
//     linksEl[currentQuestion].style.background = "green";
// }


function linksQuestion() {
    for (let i = 0; i < quizData.length; i++) {
        
        const grid_3 =document.getElementById('grid_3');
        j= i+1;
        var link = document.createElement("P");
        link.classList.toggle('links')
        link.innerText = j;
        grid_3.appendChild(link);
        
    }
    
}
const len = 2*quizData.length;

// function on clicking next or previous btn

function index(a) {

    const answer = getSelected();
    // console.log(currentQuestion);

    // for (let k = 0; k < len; k++) {
        var linksEl = document.getElementsByClassName("links");
        linksEl[currentQuestion].style.background = " green";
    
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()" class="btn reload-btn">Reload</button>
            `;
            document.getElementById('grid_2').classList.toggle('result');

            
            clearInterval(stop);
        }
    }
        
        
    
    
        
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            answerSelected.push(currentQuestion, answerEl.id);
            console.log(answerSelected);
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// -------------------Mark for review---------------------


Mor.addEventListener("click", () => {
    score+=0;
    var linksEl = document.getElementsByClassName("links");
    linksEl[currentQuestion].style.background = " yellow";
    currentQuestion+=1;
    loadQuiz();
});









// --------show time func----------------


const startingMinutes = 10;
let time = startingMinutes*60;

const countdownEl= document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time%60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        endQuiz();
        clearInterval(stop);
    }
}

// ---------------- start- test function------------

window.addEventListener('load', () => {
    
    const name = sessionStorage.getItem('NAME');
    const pin = sessionStorage.getItem('PIN');
    
    document.getElementById('namex').innerHTML = name;
    document.getElementById('examPinx').innerHTML = pin;

})


// --------------EndTest-----------------

submitBtn.addEventListener("click", () => {

    endQuiz();
});


function endQuiz() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()" class="btn reload-btn">Reload</button>`;
            document.getElementById('grid_2').classList.toggle('result');
        }
    }
    quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()" class="btn reload-btn">Reload</button>`;
            document.getElementById('grid_2').classList.toggle('result');
}



      
const quizDB=[{
    question:"Q1: What is the Full form of HTML ?",
    a:"Hello To Mark Lang",
    b:"Hey Text Modify Language",
    c:"Hyper text makeup lnaguage",
    d:"Hyper text Markup Language",
    ans:"ans4"

},
{
    question:"Q2: What is the full form of CSS ?",
    a:"Cascading Style Sheet",
    b:"Cascading Style Sheap",
    c:"Cartoon Style Sheet",
    d:"Cascading Super Sheet",
    ans:"ans1"
},
{
    
   question:"Q3: How do you find the number with the highest value of x and y?",
   a:"Math.ceil(x, y)",
   b:"ceil(x, y)",
   c:"Math.max(x, y)",
   d:"top(x, y)",    
   ans:"ans3"     
},

{
    question:"Q4: How do you create a function in JavaScript?",
    a:"function:myFunction()",
    b:"function=myFunction()",
    c:"function myFunction()",
    d:"myFunction=function()",
    ans:"ans3"
},


];

const question =document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit =document.querySelector('#submit');

const answers =document.querySelectorAll('.answer')

const showScore=document.querySelector('#showScore');

let questionCount =0;
let score=0;


const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
   question.innerHTML=questionList.question;

   option1.innerHTML=questionList.a;
   option2.innerHTML=questionList.b;
   option3.innerHTML=questionList.c;
   option4.innerHTML=questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
        
    });return answer;
};

const deslectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deslectAll();


    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea')
    }
})

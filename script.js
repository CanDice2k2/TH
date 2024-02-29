const data = [
    {   "id": 1,
        "question": "Is cow have 4 legs?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {   
        "id": 2,
        "question": "Is cow have 2 legs?",
        "answer": ["Yes", "No"],
        "correct": [1]
    },
    {   
        "id": 3,
        "question": "What is the capital of Italy?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 4,
        "question": "What is the capital of France?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 5,
        "question": "What is the capital of Germany?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 6,
        "question": "What is the capital of Italy?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {   
        "id": 7,
        "question": "What is the capital of France?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 8,
        "question": "What is the capital of Germany?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 9,
        "question": "What is the capital of Italy?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {   
        "id": 10,
        "question": "What is the capital of France?",
        "answer": ["Yes", "No"],
        "correct": [0]
    },
    {
        "id": 11,
        "question": "What is the capital of Germany?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [1]
    },
    {
        "id": 12,
        "question": "What is the capital of Italy?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [2]   
    },
    {   
        "id": 13,
        "question": "What is the capital of France?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [0]
    },
    {   
        "id": 14,
        "question": "What is the capital of Germany?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [1]
    },
    {
        "id": 15,
        "question": "What is the capital of Italy?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [2]
    },
    {
        "id": 16,
        "question": "What is the capital of France?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [0]
    },
    {
        "id": 17,
        "question": "What is the capital of Germany?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [1]
    },
    {      
        "id": 18,
        "question": "What is the capital of Italy?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [2]
    },
    {   
        "id": 19,
        "question": "What is the capital of France?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [0]
    },
    {
        "id": 20,
        "question": "What is the capital of Germany?",
        "answer": ["Paris", "Berlin", "Rome", "London"],
        "correct": [1]
    },
    {
        "id": 21,
        "question": "What animal have 4 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [0,1],
    },
    {
        "id": 22,
        "question": "What animal have 2 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 23,
        "question": "What animal have 0 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 24,
        "question": "What animal have 4 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [0,1],
    },
    {
        "id": 25,
        "question": "What animal have 2 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 26,
        "question": "What animal have 0 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },{
        "id": 27,
        "question": "What animal have 0 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 28,
        "question": "What animal have 4 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [0,1],
    },
    {
        "id": 29,
        "question": "What animal have 2 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 30,
        "question": "What animal have 0 legs?",
        "answer": ["cat", "dog", "fish", "bird"],
        "correct": [2,3],
    },
    {
        "id": 31,
        "question": "What is capital of France?",
        "correct": "London"
    },
    {
        "id": 32,
        "question": "What is capital of Germany?",
        "correct": "Berlin"
    },
    {
        "id": 33,
        "question": "What is capital of Italy?",
        "correct": "Rome"
    },
    {
        "id": 34,
        "question": "What is capital of France?",
        "correct": "Paris"
    },
    {
        "id": 35,
        "question": "What is capital of Germany?",
        "correct": "Berlin"
    },
    {
        "id": 36,
        "question": "What is capital of Italy?",
        "correct": "Rome"
    },
    {
        "id": 37,
        "question": "What is capital of France?",
        "correct": "Paris"
    },
    {
        "id": 38,
        "question": "What is capital of Germany?",
        "correct": "Berlin"
    },
    {
        "id": 39,
        "question": "What is capital of Italy?",
        "correct": "Rome"
    },
    {
        "id": 40,
        "question": "What is capital of France?",
        "correct": "Paris"
    }
]

const LoadData = () => {
    questionList = document.getElementById('question-list');
    for(let i = 0; i<data.length; i++){
       if(i<10){
            questionList.innerHTML += TrueFalseQuestion(data[i]);
       }
        else if(i<20){
            questionList.innerHTML += OneCorrectQuestion(data[i]);
        }
        else if(i<30){
            questionList.innerHTML += MultipleCorrectQuestion(data[i]);
        }
        else if(i<40){
            questionList.innerHTML += TextQuestion(data[i]);
        }
    }

}

const TrueFalseQuestion = (data) => {
   return  ` 
            <li>
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question}</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${data.id}" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${data.id}" value="1">${data.answer[1]}
            </li>
            `
}
const OneCorrectQuestion = (data) => {
    return  `
            <li>
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question}</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${data.id}" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${data.id}" value="1">${data.answer[1]}
                    <input type="radio" name="answer-question-${data.id}" value="2">${data.answer[2]}
                    <input type="radio" name="answer-question-${data.id}" value="3">${data.answer[3]}
            </li>
            `
}
const MultipleCorrectQuestion = (data) => {
    return   `
            <li>
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question}</div>
                <div class="answer">
                    <input type="checkbox" name="answer-question-${data.id}" value="0">${data.answer[0]}
                    <input type="checkbox" name="answer-question-${data.id}" value="1">${data.answer[1]}
                    <input type="checkbox" name="answer-question-${data.id}" value="2">${data.answer[2]}
                    <input type="checkbox" name="answer-question-${data.id}" value="3">${data.answer[3]}
            </li>
            `
}
const TextQuestion = (data) => {
    return `
        <li>
            <div class="question"> ${"Cau " + data.id + ": "} ${data.question}</div>
            <div class="answer">
                <input type="text" name="answer-question-${data.id}" value="" placeholder="cau tra loi">
        </li>
        `
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    CheckAnswer();
})

let score = 0;
const CheckAnswer = () => {
    document.querySelectorAll('input').forEach((item) => {
        item.disabled = true;
    })
    for(let i=1; i < data.length+1; i++){
        if(i<30){
            let answer = document.querySelectorAll(`input[name="answer-question-${i}"]:Checked`);
            let yourAnswer = [];
            for(let j=0; j<answer.length; j++){
                yourAnswer.push(answer[j].value);
            }
            if(yourAnswer.length == 0) continue;
            let correct = data[i-1].correct;
            if(CheckList(yourAnswer, correct)){
                score++;
            }
        }
        else{
            let answer = document.querySelector(`input[name="answer-question-${i}"]`).value;
            let correct = data[i-1].correct;
            if(answer == correct){
                score++;
            }
        }
    }
    console.log(score);
    document.getElementById('score').innerHTML = "Your score: " + score;
}

const CheckList = (yourAnswer, correct) => {
    if(yourAnswer.length != correct.length)
        return false;
    for(let i=0; i<yourAnswer.length; i++){
        if(correct.indexOf(Number(yourAnswer[i])) == -1)
            return false;
    }
    return true;
}
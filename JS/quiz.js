const question = document.querySelector(".question");
const opcao = document.querySelector(".answers");
const qtd = document.querySelector(".qtd");
const conteudo = document.querySelector(".conteudo");
const fim = document.querySelector(".finish");
const restart = document.querySelector(".finish button");
const btnRestart = document.getElementById("btn-restart");
const textFinish = document.querySelector(".finish span");

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () =>{
    conteudo.style.display = "flex";
    fim.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function nextQuestion(e){
    if (e.target.getAttribute("data-correct") === "true"){
        questionsCorrect++;
    }
    if (currentIndex < Object.keys(questions).length - 1){
        currentIndex++;
        loadQuestion();
    } else{
        finish();
    }
}

function finish(){
    textFinish.innerHTML = `<h2>Você acertou ${questionsCorrect} de ${Object.keys(questions).length}</h2>`;
    conteudo.style.display = "none";
    fim.style.display = "flex";
}

function loadQuestion(){
    qtd.innerHTML = `${currentIndex + 1 }/ ${Object.keys(questions).length}`;
    const item = questions[`questao${currentIndex + 1}`];
    opcao.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option}
            </button>
        `;

        opcao.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();

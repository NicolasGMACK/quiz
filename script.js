const questoes = [
    {
        titulo: "qual a capital do Brasil?",
        alternativas: ["Salvador", "Bahia", "Rio de Janeiro", "Brasília"],
        certa: 3
    },
    {
        titulo: "Quantas copas a França tem?",
        alternativas: ["3", "2", "1", "0"],
        certa: 1
    },
     {
        titulo: "qual o nome do criador do Quiz?",
        alternativas: ["Nicolas", "Lucas", "Vinícius", "Nathan"],
        certa: 0
    }
];


// const perguntas = questoes.map(questao =>  questao.titulo);
document.addEventListener("DOMContentLoaded", () => {
    console.log('pagina carregou!');
    let i = 0;
    let numeroQuest = 1;
    let acertos = 0;
    let erros = 0;

    function renderizarQuestao(i) {
    const titulo = document.querySelector(".question-bubble h2");
    titulo.textContent = questoes[i].titulo;

    const spans = document.querySelectorAll('li span');
    const alternativas = questoes[i].alternativas;
   

    alternativas.forEach((texto, index)=> {
            spans[index].textContent = texto;
        }); 
    }

    renderizarQuestao(i);

    function renderizarEstatisticas() {
     const QuestaoElement = document.getElementById('questao');
     const acertosElement = document.getElementById('acerto');
     const errosElement = document.getElementById('erro');
     QuestaoElement.textContent = numeroQuest + '/' + questoes.length;
     acertosElement.textContent = acertos;
     errosElement.textContent = erros;
     };

     renderizarEstatisticas();
     
    const opcoes = document.querySelectorAll('.answer-option');

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", () => {
            if (index === questoes[i].certa) {
                 alert('acertou');
                 acertos++;                 
                 //renderizarEstatisticas();
            } else {
                alert('errou');
                erros++;
                 
            }
            i++;
            numeroQuest++;
            renderizarQuestao(i);
            renderizarEstatisticas();
            ;
        });
    });



 });

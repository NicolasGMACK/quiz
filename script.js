const questoes = [
    {
        titulo: "qual a capital do Brasil?",
        respostas: ["Salvador", "Bahia", "Rio de Janeiro", "Brasília"],
        certa: 3
    },
    {
        titulo: "Quantas copas a França tem?",
        respostas: ["3", "2", "1", "0"],
        certa: 1
    },
     {
        titulo: "qual o nome do criador do Quiz?",
        respostas: ["Nicolas", "Lucas", "Vinícius", "Nathan"],
        certa: 0
    }
];


// const perguntas = questoes.map(questao =>  questao.titulo);
document.addEventListener("DOMContentLoaded", () => {
    console.log('pagina carregou!');
    let i = 0;

    function renderizarQuestao(i) {
    const titulo = document.querySelector(".question-bubble h2");
    titulo.textContent = questoes[i].titulo;

    const spans = document.querySelectorAll('li span');
    const resps = questoes[i].respostas;
   

    resps.forEach((texto, index)=> {
            spans[index].textContent = texto;
        });
    }

    renderizarQuestao(i);

    const opcoes = document.querySelectorAll('.answer-option');

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", () => {
            if (index === questoes[i].certa) {
                 alert('acertou');
                 i++;
                 renderizarQuestao(i);
            } else {
                alert('errou'); 
            }
        });
    });


 });

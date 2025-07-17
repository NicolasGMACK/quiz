const questoes = [
    {
        titulo: "qual a capital do Brasil?",
        respostas: ["Salvador", "Bahia", "Rio de Janeiro", "Brasília"]
    },
    {
        titulo: "Quantas copas a França tem?",
        respostas: ["3", "2", "1", "0"]
    },
     {
        titulo: "qual o nome do criador do Quiz?",
        respostas: ["Nicolas", "Lucas", "Vinícius", "Nathan"]
    }
];

 

function renderizarAlternativas() {

    spans = document.querySelectorAll('li span');
    const resps = questoes[0].respostas;
   

    resps.forEach((texto, index)=> {
            spans[index].textContent = texto;
        });

}
renderizarAlternativas();


// TextoQuestão.textContent = questoes[0].titulo;
// letraA.textContent = questoes[0].respostas[0];

// console.log(letraA);
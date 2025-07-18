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
    },
    {
        titulo: "Qual é o maior planeta do Sistema Solar?",
        alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
        certa: 2
    },
    {
        titulo: "Em que continente fica o Egito?",
        alternativas: ["Ásia", "Europa", "Oceania", "África"],
        certa: 3
    },
    {
        titulo: "Quem escreveu 'Dom Quixote'?",
        alternativas: ["William Shakespeare", "Miguel de Cervantes", "Machado de Assis", "Dante Alighieri"],
        certa: 1
    },
    {
        titulo: "Qual é o nome da moeda oficial do Japão?",
        alternativas: ["Yuan", "Won", "Iene", "Rupia"],
        certa: 2
    },
    {
        titulo: "Qual destes animais é um mamífero?",
        alternativas: ["Pinguim", "Tubarão", "Baleia", "Crocodilo"],
        certa: 2
    },
    {
        titulo: "Quem pintou a 'Mona Lisa'?",
        alternativas: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci"],
        certa: 3
    },
    {
        titulo: "Qual é a fórmula química da água?",
        alternativas: ["CO²", "H²O", "O²", "NaCl"],
        certa: 1
    }
];


document.addEventListener("DOMContentLoaded", () => {
    console.log('pagina carregou!');
    const opcoes = document.querySelectorAll('.answer-option');
    let i = 0;
    let numeroQuest = 1;
    let acertos = 0;
    let erros = 0;
    
    let contadorAjuda = 3;
    

    function renderizarDashboard() {
     const QuestaoElement = document.getElementById('questao');
     const acertosElement = document.getElementById('acerto');
     const errosElement = document.getElementById('erro');
     const ajudaElement = document.querySelector('.help-counter');
     ajudaElement.textContent = contadorAjuda;
     QuestaoElement.textContent = numeroQuest + '/' + questoes.length;
     acertosElement.textContent = acertos;
     errosElement.textContent = erros;
    }
    
    renderizarDashboard();

    function renderizarTela(i) {
     const titulo = document.querySelector(".question-bubble h2");
     titulo.textContent = questoes[i].titulo;

     const spans = document.querySelectorAll('li span');
     const alternativas = questoes[i].alternativas;
   

     alternativas.forEach((texto, index)=> {
            spans[index].textContent = texto;
        });
    const quizElement = document.querySelector('.main-wrapper');   
    quizElement.classList.add("fade-in");

     setTimeout(() =>{
         quizElement.classList.remove("fade-in");
     }, 500);
    }

   
    renderizarTela(i);

    /*
    Precisa fazer com que executar ajuda retire as questoes que são erradas, preservando sempre a certa.
    Precisa fazer com que na próxima tela o icone de cadeado seja removido!.
    Precisa ver se tem como escolher aleatoriamente entre as erradas, se for complexo faça o simples.
    importante é resolver usando o que você sabe. Perfeito significa não feito.
    */
function executarAjuda(alternativaCerta) {
    const buttonHelp = document.querySelector('.help-button');
    buttonHelp.addEventListener("click", () => {
        
        if (contadorAjuda != 0){
            contadorAjuda--;
        renderizarDashboard();
        
        let possiblidades = [0, 1, 2, 3];
     const novoarray =   possiblidades.filter((valor) => {
            return valor !=  alternativaCerta
        });
        console.log(novoarray);
       let indiceAleatorio = Math.floor(Math.random() * novoarray.length);
       valorReal = novoarray[indiceAleatorio];
       const novo = novoarray.splice(indiceAleatorio, 1);
       console.log(novo);

       console.log(valorReal);
            
            opcoes[valorReal].classList.add('locked');

            const icone = document.createElement('i');
            icone.className = 'fas fa-lock lock-icon';
            opcoes[valorReal].appendChild(icone);
        
        
} if (contadorAjuda < 1) {
    buttonHelp.classList.add('locked');
}
});
}

executarAjuda(3);

    function limpaClasses(){
        opcoes.forEach(conteudo => {
        conteudo.classList.remove('certa', 'errada', 'locked');
        });
    };

    
    

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", () => {
            if (i < questoes.length - 1){
            let alternativaCerta = questoes[i].certa;
                if (index === alternativaCerta) {
                    opcoes[index].classList.add('certa');
                    acertos++;
                    console.log(opcoes);

                } else {
                    opcoes[index].classList.add('errada');
                    opcoes[alternativaCerta].classList.add('certa');
                    erros++;
                }   
                renderizarDashboard();
                setTimeout(() => {
                i++;
                numeroQuest++;
                limpaClasses();
                renderizarDashboard();               
                renderizarTela(i);
                }, 2000);
            
            } else {    
            alert('acabou o quiz rapaz');        
            }
        });
    });
 });

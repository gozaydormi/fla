const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Em que ano o Flamengo foi fundado?",
        alternativas: [
            {
                texto: "1895",
                afirmacao:"Correto! O Flamengo foi fundado em 1895. Parabéns por acertar! 🎉"
                
            },
            {
                texto:"1898!",
                afirmacao: "O Flamengo foi fundado em 1895"
            }
        ]
    },
    {
        enunciado: "Quem é o maior artilheiro da história do Flamengo? ",
        alternativas: [
            {
                texto: "Zico",
                afirmacao: "Exato! Zico é o maior artilheiro da história do Flamengo. Ótimo trabalho! ⚽"
            },
            {
                texto: "Romário",
                afirmacao: "Zico é o maior artilheiro da história do Flamengo."
            }
        ]
    },
    {
        enunciado: " Qual é o estádio principal do Flamengo? ",
        alternativas: [
            {
                texto: "Estádio do Maracanã",
                afirmacao: "Certíssimo! O estádio principal do Flamengo é o Maracanã. Muito bem! 🏟️."
            },
            {
                texto: "Estádio do Pacaembu",
                afirmacao: "O Maracanã é o estádio principal do Flamengo."
            }
        ]
    },
    {
        enunciado: "Em que competição o Flamengo conquistou sua primeira taça internacional?",
        alternativas: [
            {
                texto: "Copa Libertadores .",
                afirmacao: " Correto! A primeira taça internacional do Flamengo foi na Copa Libertadores de 1981. Parabéns pela resposta! 🏆"
            },
            {
                texto: " Copa Sudamericana",
                afirmacao: " O Flamengo conquistou sua primeira taça internacional na Copa Libertadores de 1981."
            }
        ]
    },
    {
        enunciado: "Qual é o mascote oficial do Flamengo? ",
        alternativas: [
            {
                texto: "Urso",
                afirmacao: "O mascote oficial do Flamengo é o Urubu."
            },
            {
                texto: "Urubu",
                afirmacao:"Isso mesmo! O mascote oficial do Flamengo é o Urubu. Excelente escolha! 🦅"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "parabems por ter concluido ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "você gosta de musica? Que tipo de musica?",
    alternativas: [
        {
            texto:" serjanejo,funk",
            afirmacao: "Afirmação 1"
        },
        {
        texto:"samba,pagode",
        afirmacao: "Afirmação 2"
        }
    ]
},

{
    enunciado: "você está gostando do novo ensino médio?",
    alternativas: [
        {

        texto: "sim",
        afirmacao: "Afirmação 1 da pergunta 2"
        },
        {
        texto:"não",
        afirmacao: "Afirmação 2 da pergunta 2"
        }
    ]
},

{
    enunciado: "você sabe montar um cubo mágico?",
    alternativas: [
        {
        texto:"sim",
        afirmacao: "Afirmação 1 da pergunta 3"
        },
        {
        texto:"sim",
        afirmacao: "Afirmação 2 da pergunta 3"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();

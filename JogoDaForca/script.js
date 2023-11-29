 /*Abre o menu de navegação */
 function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

   /*Fecha o menu de navegação */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
/* Declarando as variáveis */
let palavras = ['chuvoso', 'nevasca', 'tempestoso', 'nublado', 'ensolarado'];

let palavra = palavras[Math.floor(Math.random() * palavras.length)];

let chances = 6;
let acertos = 0;

let imagem = 0;
let guessedLetters = [];

let posicao;
// Para criar um span dentro da div
for (posicao = 0; posicao < palavra.length; posicao++) {
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

// Para percorrer todas as letras possíveis
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);

    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\'' + letras[posicao] + '\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

// Adiciona a div para mostrar as tentativas restantes

let divTentativasRestantes = document.createElement("div");
divTentativasRestantes.setAttribute('id', 'tentativas-restantes');
document.body.appendChild(divTentativasRestantes);
atualizaTentativasRestantes();

function atualizaTentativasRestantes() {
    document.getElementById('tentativas-restantes').innerText = 'Tentativas restantes: ' + chances;
}


function escolheLetra(letra) {
    if (guessedLetters.includes(letra)) {
        // Letra já foi escolhida, não faz nada
        return;
    }

    guessedLetters.push(letra);

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao]) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }

    if (acertou === false) {
        imagem++;
        document.getElementById("forca").src = "images/forca-" + imagem + ".png";

        let botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    atualizaTentativasRestantes();

    
    if (chances === 0) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("☠️Você perdeu!☠️");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }

    if (acertos === palavra.length) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("🤠Você venceu!🤠");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}

// Inicializa as tentativas restantes
atualizaTentativasRestantes();

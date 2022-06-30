let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 
let nome = sessionStorage.getItem('nome')

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantos anos eu tenho?",
    alternativaA : "15",
    alternativaB : "17",
    alternativaC : "16",
    correta      : "16",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Esporte favorito?",
    alternativaA : "Volêi",
    alternativaB : "Basquete",
    alternativaC : "Futebol",
    correta      : "Volêi",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Meu aniversário?",
    alternativaA : "19/08/2004",
    alternativaB : "28/03/2006",
    alternativaC : "04/06/2003",
    correta      : "28/03/2006",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Animal favorito?",
    alternativaA : "Gato",
    alternativaB : "Cachorro",
    alternativaC : "Cavalo",
    correta      : "Cachorro",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Estilo de música favorita??",
    alternativaA : "Pagode",
    alternativaB : "Funk",
    alternativaC : "Sertanejo",
    correta      : "Funk",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Meu nome completo?",
    alternativaA : "Gabriel Rocha Gouveia",
    alternativaB : "Gabriel Gouveia",
    alternativaC : "Gabriel Rocha",
    correta      : "Gabriel Rocha Gouveia",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual escola eu estudo?",
    alternativaA : "Dinamica",
    alternativaB : "SENAI",
    alternativaC : "Santa Terezinha",
    correta      : "SENAI",
}

    const q8 = {
        numQuestao   : 8,
        pergunta     : "Comida Favorita?",
        alternativaA : "Pizza",
        alternativaB : "Churrasco",
        alternativaC : "Sushi",
        correta      : "Churrasco",

    }        
    const q9 = {
        numQuestao   : 9,
        pergunta     : "Jogo favorito?",
        alternativaA : "CS-GO",
        alternativaB : "Fortnite",
        alternativaC : "LoL",
        correta      : "CS-GO",

    }
    const q10 = {
        numQuestao   : 10,
        pergunta     : "Marca favorita?",
        alternativaA : "Lacoste",
        alternativaB : "Adidas",
        alternativaC : "Nike",
        correta      : "Nike",

    }

    const q11 = {
        numQuestao   : 11,
        pergunta     : "Time de futebol?",
        alternativaA : "Flamengo",
        alternativaB : "Avaí",
        alternativaC : "Santos",
        correta      : "Flamengo",
    }
    
    const q12 = {
        numQuestao   : 12,
        pergunta     : "signo?",
        alternativaA : "Cancêr",
        alternativaB : "Libra",
        alternativaC : "áries",
        correta      : "áries",
    }
    
    const q13 = {
        numQuestao   : 13,
        pergunta     : "Quantos irmãos?",
        alternativaA : "1-menina",
        alternativaB : "2-meninos",
        alternativaC : "3-meninas",
        correta      : "1-menina",
    }
    
    const q14 = {
        numQuestao   : 14,
        pergunta     : "Qual é o nome do meu pai?",
        alternativaA : "João",
        alternativaB : "Pedro",
        alternativaC : "Filipe",
        correta      : "Filipe",
    }
    
    const q15 = {
        numQuestao   : 15,
        pergunta     : "Qual é o nome da minha mãe?",
        alternativaA : "Samantha",
        alternativaB : "Bianca",
        alternativaC : "Dalva",
        correta      : "Bianca",
    }
    
    const q16 = {
        numQuestao   : 16,
        pergunta     : "Quantas cachoros?",
        alternativaA : "3",
        alternativaB : "2",
        alternativaC : "1",
        correta      : "2",
    }
    
    const q17 = {
        numQuestao   : 17,
        pergunta     : "Bebida favorita?",
        alternativaA : "Refrigerante",
        alternativaB : "Suco",
        alternativaC : "Agua",
        correta      : "Refrigerante",
    }
    
        const q18 = {
            numQuestao   : 18,
            pergunta     : "Veiculo favorito?",
            alternativaA : "Carro",
            alternativaB : "Bicicleta",
            alternativaC : "Moto",
            correta      : "Carro",
    
        }        
        const q19 = {
            numQuestao   : 19,
            pergunta     : "linguagem favorita de programação?",
            alternativaA : "Python-css",
            alternativaB : "Html-Java script",
            alternativaC : "Todas estão correta",
            correta      : "Todas estão correta",
    
        }
        const q20 = {
            numQuestao   : 20,
            pergunta     : "Qual opção está correta?",
            alternativaA : "Praia",
            alternativaB : "piscina",
            correta      : "Praia",
    
        }
        const q21 = {
            numQuestao   : 21,
            pergunta     : "Moto favorita?",
            alternativaA : "Bmw",
            alternativaB : "Honda",
            alternativaC : "Suzuki",
            correta      : "Bmw",
        }
        
        const q22 = {
            numQuestao   : 22,
            pergunta     : "Carro favorito?",
            alternativaA : "Tesla",
            alternativaB : "Porshe",
            alternativaC : "Ferrari",
            correta      : "Tesla",
        }
        
        const q23 = {
            numQuestao   : 23,
            pergunta     : "Meu sonho?",
            alternativaA : "Morrar no Estados unidos com meus amigos?",
            alternativaB : "Ter uma moto",
            alternativaC : "Ter uma carro",
            correta      : "Morrar no Estados unidos com meus amigos?",
        }
        
        const q24 = {
            numQuestao   : 24,
            pergunta     : "Pais favorito?",
            alternativaA : "Eua",
            alternativaB : "Brasil",
            alternativaC : "França",
            correta      : "Eua",
        }
        
        const q25 = {
            numQuestao   : 25,
            pergunta     : "Comida gelada favorita?",
            alternativaA : "Picole",
            alternativaB : "Açaí",
            alternativaC : "Sorvete",
            correta      : "Açaí",
        }
        
        const q26 = {
            numQuestao   : 26,
            pergunta     : "Quantas gatos?",
            alternativaA : "0",
            alternativaB : "2",
            alternativaC : "1",
            correta      : "0",
        }
        
        const q27 = {
            numQuestao   : 27,
            pergunta     : "Jogador de Futebol favorita?",
            alternativaA : "Neymar",
            alternativaB : "Cr7",
            alternativaC : "Messi",
            correta      : "Neymar",
        }
        
            const q28 = {
                numQuestao   : 28,
                pergunta     : "Bike favorita?",
                alternativaA : "Gios",
                alternativaB : "conondale",
                alternativaC : "vikingx",
                correta      : "Gios",
        
            }        
            const q29 = {
                numQuestao   : 29,
                pergunta     : "linguagem que eu sei ?",
                alternativaA : "Portugês",
                alternativaB : "Portugês e inglês",
                alternativaC : "Portugês e espanhol",
                correta      : "Portugês e inglês",
        
            }
            const q30 = {
                numQuestao   : 30,
                pergunta     : "Skate ou bike?",
                alternativaA : "Skate",
                alternativaB : "Bike",
                correta      : "Skate",
        
            }
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 
    }
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = nome + " conseguiu " + pontos + " " + pont

    aviso.textContent = nome + " conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}
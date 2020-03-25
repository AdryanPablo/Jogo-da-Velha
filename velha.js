var tabuleiro
var letraDoJogador
var letraDoComputador
var jogadores
var quemComeça
var quemJoga
var númeroDeJogadas
var ganhador
var estadoDoJogo

// window.addEventListener('load', iniciar)

// Implementar uma variável para controlar a dificuldade do jogo.

function iniciar () {

    construirTabuleiro()
    
    tabuleiro = [
        [ document.getElementById('posição00'), document.getElementById('posição01'), document.getElementById('posição02') ],
        [ document.getElementById('posição10'), document.getElementById('posição11'), document.getElementById('posição12') ],
        [ document.getElementById('posição20'), document.getElementById('posição21'), document.getElementById('posição22') ]
    ]
    jogadores = {
        0: 'Computador',
        1: 'Jogador'
    }
    númeroDeJogadas = 0
    estadoDoJogo = true
    ganhador = ''

    escolherXO()
    escolherQuemComeça()
    pingPong()

}

function construirTabuleiro () {

    let documento = document.getElementById('documento')

    documento.innerHTML = `

        <button id = 'novoJogo' onclick = 'iniciar()'>Novo Jogo</button>
    
        <div id = 'tabuleiro'>

            <div id = 'posição00' class = 'posições' onclick = 'validarJogada(0, 0)'></div>
            <div id = 'posição01' class = 'posições' onclick = 'validarJogada(0, 1)'></div>
            <div id = 'posição02' class = 'posições' onclick = 'validarJogada(0, 2)'></div>
            <div id = 'posição10' class = 'posições' onclick = 'validarJogada(1, 0)'></div>
            <div id = 'posição11' class = 'posições' onclick = 'validarJogada(1, 1)'></div>
            <div id = 'posição12' class = 'posições' onclick = 'validarJogada(1, 2)'></div>
            <div id = 'posição20' class = 'posições' onclick = 'validarJogada(2, 0)'></div>
            <div id = 'posição21' class = 'posições' onclick = 'validarJogada(2, 1)'></div>
            <div id = 'posição22' class = 'posições' onclick = 'validarJogada(2, 2)'></div>

        </div>

    `

}

function escolherXO () {

    while (true) {

        letraDoJogador = window.prompt('Você quer jogar com "x" ou "o"? ').toLowerCase()
        
        if (letraDoJogador == 'x') {

            letraDoComputador = 'o'
            break

        } else if (letraDoJogador == 'o') {

            letraDoComputador = 'x'
            break

        }

    }

}

function escolherQuemComeça () {

    let númeroAleatório = Math.round(Math.random() * 1)

    quemJoga = quemComeça = jogadores[númeroAleatório]
    alert(`${quemComeça} começa!`)

}

function pingPong () {

    if (quemJoga == 'Computador') {

        jogadaDoComputador()

    }

}

function jogadaDoComputador () {

    // Adicionar estratégias

    while (true) {

        let linha = Math.round(Math.random() * 2)
        let coluna = Math.round(Math.random() * 2)

        if (validarJogada(linha, coluna)) {

            break

        }

    }

}

function validarJogada (linha, coluna) {

    if (tabuleiro[linha][coluna].innerHTML != '') {

        if (quemJoga == 'Jogador') {

            alert('Está casa já está marcada. Tente outra.')

        }

        return false

    } else if (estadoDoJogo == false) {

        alert('O jogo acabou!')
        return true

    } else if (númeroDeJogadas == 9) {

        estadoDoJogo = false
        return true

    } else {

        marcarTabuleiro(linha, coluna)
        return true

    }

}

function marcarTabuleiro (linha, coluna) {

    if (quemJoga == 'Jogador') {

        tabuleiro[linha][coluna].innerHTML = letraDoJogador
        númeroDeJogadas++
        quemJoga = 'Computador'

    } else {

        tabuleiro[linha][coluna].innerHTML = letraDoComputador
        númeroDeJogadas++
        quemJoga = 'Jogador'

    }

    verificarVitória()
    pingPong()

}

function verificarVitória () {

    // Linhas

    if (tabuleiro[0][0].innerHTML == tabuleiro[0][1].innerHTML && tabuleiro[0][1].innerHTML == tabuleiro[0][2].innerHTML && tabuleiro[0][0].innerHTML != '') {

        ganhador = tabuleiro[0][0].innerHTML

    } else if (tabuleiro[1][0].innerHTML == tabuleiro[1][1].innerHTML && tabuleiro[1][1].innerHTML == tabuleiro[1][2].innerHTML && tabuleiro[1][0].innerHTML != '') {

        ganhador = tabuleiro[1][0].innerHTML

    } else if (tabuleiro[2][0].innerHTML == tabuleiro[2][1].innerHTML && tabuleiro[2][1].innerHTML == tabuleiro[2][2].innerHTML && tabuleiro[2][0].innerHTML != '') {

        ganhador = tabuleiro[2][0].innerHTML

    } else

    // Colunas

    if (tabuleiro[0][0].innerHTML == tabuleiro[1][0].innerHTML && tabuleiro[1][0].innerHTML == tabuleiro[2][0].innerHTML && tabuleiro[0][0].innerHTML != '') {

        ganhador = tabuleiro[0][0].innerHTML

    } else if (tabuleiro[0][1].innerHTML == tabuleiro[1][1].innerHTML && tabuleiro[1][1].innerHTML == tabuleiro[2][1].innerHTML && tabuleiro[0][1].innerHTML != '') {

        ganhador = tabuleiro[0][1].innerHTML

    } else if (tabuleiro[0][2].innerHTML == tabuleiro[1][2].innerHTML && tabuleiro[1][2].innerHTML == tabuleiro[2][2].innerHTML && tabuleiro[0][2].innerHTML != '') {

        ganhador = tabuleiro[0][2].innerHTML

    } else

    // Diagonais
    
    if (tabuleiro[0][0].innerHTML == tabuleiro[1][1].innerHTML && tabuleiro[1][1].innerHTML == tabuleiro[2][2].innerHTML && tabuleiro[0][0].innerHTML != '') {

        ganhador = tabuleiro[0][0].innerHTML

    } else if (tabuleiro[0][2].innerHTML == tabuleiro[1][1].innerHTML && tabuleiro[1][1].innerHTML == tabuleiro[2][0].innerHTML && tabuleiro[0][2].innerHTML != '') {

        ganhador = tabuleiro[0][2].innerHTML

    }

    // Verificador

    if (ganhador == 'x' || ganhador == 'o') {

        estadoDoJogo = false
        alert(`"${ganhador}" ganhou!`)

    }

}
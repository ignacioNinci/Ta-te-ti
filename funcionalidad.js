let bandera = false;
let turno = 0;
let tablero = new Array();
window.onload = function () {
    let iniciar = document.getElementById('btn-comenzar').addEventListener('click', comenzar);
}

function comenzar() {
    bandera = true;
    var jugador1 = document.getElementById('jugador1');
    var jugador2 = document.getElementById('jugador2');

    if(jugador1.value == '' && jugador2.value == '') {
        alert('Inserte jugadores');
    } else if (jugador1.value == '') {
        alert('Inserte jugador 1');
    } else if (jugador2.value == '') {
        alert('Inserte jugador 2');
    } else {
        if (jugador1.value != '' && jugador2.value != '') {
            document.getElementById('turnoJugador').innerHTML = 'Es el turno de ' + jugador1.value;
        }
        
    }
    
}

function CrearTablero() {
    
    let divConteiner = document.createElement('div');
    divConteiner.setAttribute('class', 'divConteiner');

    for (let i = 0; i < 9; i++) {
        let btns = document.createElement('div');
        divConteiner.appendChild(btns);
        btns.setAttribute('class', 'botones');
        document.getElementById('tablero').appendChild(divConteiner);
        btns.setAttribute('id', `btn${i}`);

        btns.addEventListener('click', () => {
            if(bandera==true){
            if(document.getElementById('turnoJugador').innerHTML == 'Es el turno de ' + jugador1.value) {
                btns.style.background = 'rgb(0, 0, 0)';
                document.getElementById('turnoJugador').innerHTML = 'Es el turno de ' + jugador2.value;
                // setTimeout(()=>{ganador()},1000);
                setTimeout(ganador,1000);
                // ganador();

            } else if (document.getElementById('turnoJugador').innerHTML == 'Es el turno de ' + jugador2.value){
                btns.style.background = 'rgb(255, 99, 71)';
                document.getElementById('turnoJugador').innerHTML = 'Es el turno de ' + jugador1.value
                setTimeout(ganador,1000);

                // setTimeout(()=>{ganador()},1000);
            }
        } else{
            alert('Inicie una nueva partida');

        }}); 
    }
     
}

CrearTablero();
    

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');


function ganador() {

    if((btn0.style.background == 'rgb(0, 0, 0)' && btn1.style.background == 'rgb(0, 0, 0)' && btn2.style.background == 'rgb(0, 0, 0)')
     || (btn3.style.background == 'rgb(0, 0, 0)' && btn4.style.background == 'rgb(0, 0, 0)' && btn5.style.background == 'rgb(0, 0, 0)') 
     || (btn6.style.background == 'rgb(0, 0, 0)' && btn7.style.background == 'rgb(0, 0, 0)' && btn8.style.background == 'rgb(0, 0, 0)') 
     || (btn0.style.background == 'rgb(0, 0, 0)' && btn3.style.background == 'rgb(0, 0, 0)' && btn6.style.background == 'rgb(0, 0, 0)') 
     || (btn1.style.background == 'rgb(0, 0, 0)' && btn4.style.background == 'rgb(0, 0, 0)' && btn7.style.background == 'rgb(0, 0, 0)') 
     || (btn2.style.background == 'rgb(0, 0, 0)' && btn5.style.background == 'rgb(0, 0, 0)' && btn8.style.background == 'rgb(0, 0, 0)'))
      {
        alert('GANADOR ' + jugador1.value);
        bandera = false;
    }

    if((btn0.style.background == 'rgb(255, 99, 71)' && btn1.style.background == 'rgb(255, 99, 71)' && btn2.style.background == 'rgb(255, 99, 71)')
     || (btn3.style.background == 'rgb(255, 99, 71)' && btn4.style.background == 'rgb(255, 99, 71)' && btn5.style.background == 'rgb(255, 99, 71)')
     || (btn6.style.background == 'rgb(255, 99, 71)' && btn7.style.background == 'rgb(255, 99, 71)' && btn8.style.background == 'rgb(255, 99, 71)')
     || (btn0.style.background == 'rgb(255, 99, 71)' && btn3.style.background == 'rgb(255, 99, 71)' && btn6.style.background == 'rgb(255, 99, 71)')
     || (btn1.style.background == 'rgb(255, 99, 71)' && btn4.style.background == 'rgb(255, 99, 71)' && btn7.style.background == 'rgb(255, 99, 71)') 
     || (btn2.style.background == 'rgb(255, 99, 71)' && btn5.style.background == 'rgb(255, 99, 71)' && btn8.style.background == 'rgb(255, 99, 71)')) {
        alert('GANADOR ' + jugador2.value);
        bandera = false;
    }

}


// function colocar(boton) {
//     if (bandera == true) {
//         if (turno == 1 && boton.value == 'I') {
//             turno = 2;
//             document.getElementById('turnoJugador').innerHTML = 'Turno del jugador ' + jugador2.value;
//             boton = "X";
//             boton.className = 'botonesX';

//         } else {
//             if (turno == 2 && boton.value == 'I' ) {
//                 turno = 1;
//                 document.getElementById('turnoJugador').innerHTML = 'Turno del jugador ' + jugador1.value;
//                 boton.value = "O";
//                 boton.className = 'botonesO';
                
//             }
//         }
//     }
// }
// colocar();
// document.getElementById('btn-1').addEventListener('click', colocar);

 
// let botones = document.getElementsByClassName('botones');

// function funcionamiento() {
//     if (bandera == true) {
//         if (turno == 1 && botones.value == 'I' ) {
//             turno = 2;
//             document.getElementById('turnoJugador').innerHTML = 'Es el turno del jugador ' + jugador2.value;
//             botones.value = 'X';
//             botones.className = 'botonesX';
//         } else {
//             if (turno == 2 && botones.value == 'I') {
//                 turno = 1;
//                 document.getElementById('turnoJugador').innerHTML = 'Es el turno del jugador ' + jugador1.value;
//                 botones.value = 'O';
//                 botones.className = 'botonesO';
//             }
//         }
//     }
// }

// funcionamiento(botones);
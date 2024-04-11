var arrayCelle = [];
var numeriDisponibili = [];
var numeriUsciti = [];

function creaTabellone() {
    var tabellone = document.createElement('div');
    tabellone.classList.add('tabellone');
    var numeriTotali = 76;
    for (let i = 1; i <= numeriTotali; i++) {
        numeriDisponibili.push(i);
        var cella = document.createElement('div');
        cella.classList.add('cella');
        cella.textContent = i;
        tabellone.appendChild(cella);
        arrayCelle.push(cella);
        }
    document.getElementById('spazioTabella').appendChild(tabellone);
}

function generaNumeroCasuale() {
    if (numeriDisponibili.length === 0) {
        alert('Tutti i numeri sono stati selezionati');
        return;
    }
    var indiceCasuale = Math.floor(Math.random() * numeriDisponibili.length);
    var numeroCasuale = numeriDisponibili[indiceCasuale];
    evidenziaCella(numeroCasuale);
}

function evidenziaCella(numero) {
    var celle = document.querySelectorAll('.cella');
    var cellaDaEvidenziare = celle[numero - 1]; 
    cellaDaEvidenziare.classList.add('evidenziata');
    document.getElementById('visualizza').value = numero;
    numeriUsciti.push(numero);
    numeriDisponibili.splice(numeriDisponibili.indexOf(numero), 1);
    };


document.addEventListener('DOMContentLoaded', function() {
    creaTabellone();    

/* function generaNumeroCasuale() {
    return Math.floor(Math.random() * (77)) ;
}
document.addEventListener('DOMContentLoaded', function() {
    creaTabellone(); */


var bottoneGenera = document.getElementById('casuale');
bottoneGenera.addEventListener('click', function() {
    generaNumeroCasuale();
 });
});

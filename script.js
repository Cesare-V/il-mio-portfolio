// Definisce l'array per creare una lista di competenze
const competenze = [
    "HTML",
    "CSS",
    "Javascript & Typescript",
    "Node.js & Express",
    "Database PostgreSQL",
    "Git & GitHub"
]

// Troviamo la lista <ul> nel documento
const listaHtml = document.getElementById("lista-competenze");

// Svuotiamo la lista per sicurezza per ogni nuova attività
listaHtml.innerHTML = "";

// Per ogni competenza nell'array, creiamo un <li> e lo appendiamo
competenze.forEach(function(singolaCompetenza) {
    const nuovoElemento = document.createElement("li");
    nuovoElemento.textContent = singolaCompetenza;
    listaHtml.appendChild(nuovoElemento);
})

// 1. Variabile per tracciare lo stato
let conteggio = 0;

// 2. Prendiamo i riferimenti agli elementi HTML
const bottone = document.getElementById("bottone-saluto");
const contatore = document.getElementById("numero-saluti");

// 3. Ascoltiamo il click dell'utente
bottone.addEventListener("click", function() {
    conteggio = conteggio + 1;
    contatore.textContent = conteggio;
    if (conteggio === 5) {
        alert("Grande traguardo! Hai raggiunto 5 saluti!");
    }
    console.log("il conteggio attuale è:", conteggio);
});

// Prende il riferimento al form
const formProgetto = document.getElementById("form-progetto");

const progettiSalvati = localStorage.getItem("miei_progetti");

let progetti = [];

if (progettiSalvati !== null) {
    // Se c'erano già dei dati salvati, ritrasformiamo il testo in Array!
    progetti = JSON.parse(progettiSalvati);
} else {
    // Se è la prima volta in assoluto che apriamo il sito, usiamo i progetti iniziali
    progetti = [
        {
            titolo: "Todo-list",
            descrizione: "App per creare, modificare e aggiungere le varie attività"
        }, 
        {
            titolo: "Portfolio Personale",
            descrizione: "Il mio primo sito web interattivo con HTML, CSS e JS."
        }
    ];
}

const contenitoreProgetti = document.getElementById("sezione-progetti");

function renderProgetti() {
    // 1. Svuotiamo il contenitore per ridisegnare da zero la lista pulita
    contenitoreProgetti.innerHTML = "";

    // 2. Disegniamo tutte le card presenti nell'array
    progetti.forEach(function(progetto) {
        const cardProgetto = document.createElement("article");
        cardProgetto.classList.add("card-progetto");

        const titolo = document.createElement("h4");
        titolo.textContent = progetto.titolo;

        const descrizione = document.createElement("p");
        descrizione.textContent = progetto.descrizione;

        cardProgetto.appendChild(titolo);
        cardProgetto.appendChild(descrizione);

        contenitoreProgetti.appendChild(cardProgetto);
    });
}

// Chiamiamo subito la funzione all'avvio della pagina per mostrare i progetti
renderProgetti();

// Ascoltiamo l'evento submit quando l'utente clicca sul pulsante aggiungi nel form
formProgetto.addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Leggiamo cosa ha scritto l'utente
    const inputTitolo = document.getElementById("input-titolo");
    const inputDescrizione = document.getElementById("input-descrizione");

    // 2. Creiamo il nuovo oggetto
    const nuovoProgetto = {
        titolo: inputTitolo.value,
        descrizione: inputDescrizione.value
    };

    // 3. Lo aggiungiamo all'array con .push()
    progetti.push(nuovoProgetto);

    // 4. Salviamo l'intero array aggiornato nel localStorage permanente!
    localStorage.setItem("miei_progetti", JSON.stringify(progetti));

    // 5. Ridisegniamo lo schermo con la nostra funzione!
    renderProgetti();

    // 6. Puliamo i campi di input
    inputTitolo.value = "";
    inputDescrizione.value = "";
});
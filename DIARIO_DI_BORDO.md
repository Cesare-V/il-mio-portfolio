# 🚀 Diario di Bordo: Da Zero a Junior Full Stack Developer
**Studente:** Cesare  
**Data:** 10 Novembre 2026  
**Stato:** Giorno 1 Completato con Successo! 🎯  

---

## 📍 Stato del Progetto Realizzato
Hai costruito da zero un'applicazione web interattiva funzionante e architettata a file separati in `Projects/il-mio-portfolio/`:
* `index.html`: Scheletro semantico HTML5, meta tag viewport, form di inserimento, contenitori dinamici.
* `style.css`: Box model, colori coordinati, pseudo-classi (`:hover`), layout a card.
* `script.js`: Logica a eventi, contatore, iterazione con `forEach`, creazione dinamica di nodi DOM, principio DRY e persistenza su `localStorage`.

---

## 🧠 Compendio dei Concetti & I "Perché Ingegneristici"

| Concetto | Cosa fa | Il "Perché Ingegneristico" |
| :--- | :--- | :--- |
| **Separazione dei File** | Divide HTML, CSS e JS in 3 file distinti. | Pulizia del codice, lavoro simultaneo in team (Git), e memorizzazione in cache del browser per massime prestazioni. |
| **Il DOM in RAM** | Mappa ad albero degli elementi creata in memoria. | Modificare la RAM impiega frazioni di millisecondo e non richiede ricaricare la pagina da disco. |
| **`addEventListener`** | Intercetta azioni dell'utente (click, submit). | *Separation of Concerns*: l'HTML definisce solo il contenuto, il JS gestisce solo il comportamento. |
| **Triplo Uguale (`===`)** | Controlla sia il valore che il tipo di dato. | Evita le conversioni implicite di tipo del `==` (es. `5 == "5"` è `true`), prevenendo bug subdoli nei calcoli e nei dati. |
| **`const` vs `let`** | `const` per riferimenti fissi, `let` per variabili riassegnabili. | Protegge il codice da sovrascritture accidentali (`const` protegge i riferimenti del DOM). |
| **Array di Oggetti** | Struttura dati chiave del web `[{ ... }, { ... }]`. | Lega insieme tutte le proprietà di una stessa entità (titolo, descrizione, data). È lo standard universale JSON. |
| **`forEach` & Callback** | Cicla sugli elementi di una collezione. | Codice dichiarativo, evita errori di conteggio manuale (*off-by-one errors*) tipici del vecchio ciclo `for`. |
| **`document.createElement` + `textContent`** | Crea nodi HTML e vi inserisce testo sicuro. | Previene attacchi di sicurezza informatica (XSS) e aggiorna solo il singolo nodo senza ridisegnare tutta la pagina. |
| **La Matrioska del DOM** | Annidamento dei nodi con `appendChild`. | Si costruiscono i pezzi piccoli (`h4`, `p`), si mettono nella scatola media (`card`), e la card va nel contenitore a schermo. |
| **`event.preventDefault()`** | Blocca il comportamento predefinito del browser. | Impedisce al browser di ricaricare la pagina quando si invia un `<form>`, mantenendo intatto lo stato in memoria (SPA). |
| **RAM vs `localStorage`** | Memoria volatile vs memoria permanente del browser. | La RAM si cancella con F5. `localStorage` mantiene i dati anche a PC spento (usando `JSON.stringify` e `JSON.parse`). |
| **Principio D.R.Y.** | *Don't Repeat Yourself* (creazione di funzioni uniche). | Evita codice duplicato. La funzione `renderProgetti()` funge da unico motore che trasforma i dati in grafica (*State-driven UI*). |
| **I Sistemi Operativi** | Windows, Mac, Linux. | A JavaScript non importa l'OS su cui scrivi. Nei server cloud gira al 99% Linux; su Windows usiamo PowerShell e WSL2. |

---

## 🗺️ Mappa dei Progressi del Percorso

- [x] **Modulo 1: Basi del Web & Frontend Core** *(COMPLETATO)*
- [ ] **Modulo 1.5: CSS Moderno & Accessibilità** *(Flexbox avanzato, CSS Grid, Responsive `@media`, a11y)*
- [ ] **Modulo 2: Tooling & Version Control** *(Git, GitHub, GitHub Pages, Node.js)*
- [ ] **Modulo 3: Asincronia & Chiamate di Rete** *(HTTP, REST API, `fetch`, `async/await`)*
- [ ] **Modulo 4: Backend con Node.js & Express** *(Rotte, Controller, Middleware, RESTful API)*
- [ ] **Modulo 5: Database & Persistenza Cloud** *(PostgreSQL, Modellazione Dati, ORM Prisma)*
- [ ] **Modulo 6: Progetto Full Stack Completo, Docker & Portfolio per Colloqui**

---

## 📅 Il Programma per la Prossima Sessione

1. **Ripassino Flash (5 minuti):**
   * Rinfrescare al volo la sequenza: *Dati -> LocalStorage -> renderProgetti()*.
2. **CSS Moderno per il Portfolio:**
   * **Flexbox & CSS Grid:** Trasformare l'elenco dei progetti in una griglia ordinata a più colonne.
   * **Responsive Web Design (`@media`):** Far adattare la grafica per smartphone e tablet.
   * **Accessibilità Web (a11y):** Contrasto, semantica (`<main>`, `<section>`), navigazione da tastiera.
3. **La Cassetta degli Attrezzi:**
   * Configurazione di Git e Node.js.
   * Il tuo primo commit con cronologia professionale.

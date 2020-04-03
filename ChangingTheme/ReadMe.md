# :sunny: Sito che cambia Tema :new_moon:

Un semplice sito che cambia tema con un semplice click!

### Temi

- **Chiaro** :sunny:
  - Immagine logo chiara;
  - Palette colore Azzurro;
  - Interruttore a sinistra.

- **Scuro** :new_moon:
  - Immagine logo scura;
  - Palette colore Blue Scuro;
  - Interruttore a destra.

<!-- Check Out: [Mitch D. Lincoln](http://mitchdlincoln.tech/) -->

### Tecnologie utilizzate:

- [HTML](#html)

  > Per la struttura del sito.

- [CSS](#css)

  > Per dare un po' di stile alla pagina e definire i temi.

- [JavaScript](#javascript)

  > Per chiambiare i temi.

---

## HTML

Semplice pagina con una barra di navigazione con tre voci: 'Home', 'About' e l'interrutore per cambiare tema.
L'interrutore sfutta `<input id="switch" type="checkbox" />` poi modelleato grazie al CSS.
Un piccolo header, non rettangolare, con il logo e un titolo, mentre il corpo centrale presenta solo del testo fittizio.

## CSS

Due file: uno per lo stile genarele e, quindi, i temi e il secondo per l'interrutore.

In *style.css* dichiaro le variabili dei colori e le utilizzo per definire l'aspetto dei due temi. Procedo poi a modellare i vari componenti del sito.
In particolare, utilizzo `clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);` per definire la forma del header.
\*** Una volta ricaricata la pagina si presenterà questa situazione: `<body class="light dark">` quindi la calsse `dark` verra definita dopo `light` affinchè venga applicata (il principio di cascata nel CSS)

Nel *switchTheme.css* importo *style.css* per poter sfruttare le variabili dei colori e rendere anche l'interrutore dinamico.
Utilizzo il pseudo-elemento `::before` per creare la "levetta" che si muove ad indicare il tema scelto. 
Essendo l'interrutore di fatto un'input di tipo checkbox, ho la possibilità di sfruttare la pseudo-classe `:checked` per distinguere quale tema è selezionato ed utilizzare un'animazione per spostare la "levetta" da sinistra a destra.

## JavaScript

Uno script semplice che attende il click sull'interruttore e poi, se `if (body.classList.contains("dark"))` è vero, cambia il tema in chiaro, altrimenti in scuro.
\*** Cerco `dark` perchè c'è la possibilità che tra le classi di `body` ci sia `light` ma non sia applicato.

Per mantenere il tema anche dopo la ricarica della pagina sfrutto il browser e salvo il tema selezionato nello storage `localStorage.setItem("theme", "dark");`.
Carico, all'inizio della sessione della pagina, solo se il tema è stato cambiato in scuro, di default c'è il chiaro:
```
if (theme === "dark") {
  body.classList.add(theme);
  imgLogo.src = whiteLogo;  
  swt.checked = true;
}
```
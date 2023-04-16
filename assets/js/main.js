/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/




const images = [
    {
        image: '"https://picsum.photos/id/237/700/500"',
        title: 'Labrador',
        text: 'Il Labrador Retriever, conosciuto più semplicemente come Labrador, è una razza canina che risale almeno al 1830, quando i cani d acqua di St. Johns allevati da coloni europei a Terranova furono introdotti per la prima volta e successivamente selezionati in Gran Bretagna. Il Labrador fa parte del gruppo dei Retriever, cani allevati e selezionati a partire dal XIX secolo.',
    }, {
        image: 'https://picsum.photos/id/465/700/500',
        title: 'Montagna',
        text: 'Una montagna è un rilievo della superficie terrestre che si estende sopra il terreno circostante con una certa altezza, prominenza ed isolamento topografico. Esistono varie convenzioni per ciò che riguarda l altezza al sopra della quale si parla di montagna e non di collina; d ordinario si definisce montagna un rilievo che supera i 400 - 500[1] o, secondo altre convenzioni, i 600 -700[2] metri sul livello del mare (s.l.m.), ma solo quando il suo aspetto è, almeno parzialmente, impervio.',
    }, {
        image: 'https://picsum.photos/id/765/700/500',
        title: 'Alba',
        text: "L'alba è il periodo intermedio fra la notte e il pieno giorno. Ha inizio alle prime luci del giorno, il momento detto anche albore[1] o albeggiamento,[2] culmina con l'aurora e termina con la levata del Sole, il momento nel quale il bordo del disco solare compare sopra l'orizzonte.[3][4] La durata dell’alba (durata dell’alba astronomica + durata dell’alba nautica + durata dell’alba civile) è di circa 1 ora e 12 minuti, pari al tempo impiegato dalla Terra per ruotare di 18°.",
    }, {
        image: 'https://picsum.photos/id/743/700/500',
        title: 'Fuller Building',
        text: 'Il Fuller Building, meglio noto come Flatiron Building ("ferro da stiro"), con i suoi 86,9 metri di altezza al suo completamento nel 1902 era uno dei più alti edifici di New York',
    }, {
        image: 'https://picsum.photos/id/1/700/500',
        title: "MacBook",
        text: 'MacBook è una serie di Macintosh prodotti da Apple Inc. che hanno rimpiazzato la famiglia degli iBook G4 e il PowerBook G4 12".',
    }
];

images.forEach((element, index) =>{
    const {image, title, text} = element;
    let divImg = document.querySelector('.immagini').innerHTML += `
        <div class="immagine" id="${index + 1}">
            <img src=${image} alt="">
            <div class="text">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
    `;
    let immagine = document.getElementById(`${index}`)
    console.log(immagine)
})
let frecciaDx = document.querySelector('.frecciaDx')
let frecciaSx = document.querySelector('.frecciaSx')

// let immagineAttiva = document.getElementById(`img0`)
let immagineAttiva = 0;
console.log(images.slice(-1))

frecciaDx.addEventListener('click', function(){
    //let img = document.querySelector(".immagine")
    let vecchiaImg = document.getElementById(`${immagineAttiva}`)
    console.log(vecchiaImg)
    immagineAttiva = immagineAttiva + 1;
    // se imgattiva = array.lenght -> imaattiva = 0
    if (immagineAttiva == images.length+1) {
        immagineAttiva = 0;
    }
    let nuovaImg= document.getElementById(`${immagineAttiva}`);
    if (vecchiaImg.classList.contains('attiva')){

        vecchiaImg.classList.remove('attiva');
        nuovaImg.classList.add('attiva');
    }
    

})
frecciaSx.addEventListener('click', function(){
    //let img = document.querySelector(".immagine")
    let vecchiaImg = document.getElementById(`${immagineAttiva}`)
    // se imgattiva = array.lenght -> imaattiva = 0
    if (immagineAttiva == 0) {
        immagineAttiva = images.length+1;
    }
    immagineAttiva = immagineAttiva - 1;
    let nuovaImg= document.getElementById(`${immagineAttiva}`);
    if (vecchiaImg.classList.contains('attiva')){

        vecchiaImg.classList.remove('attiva');
        nuovaImg.classList.add('attiva');
    }
    

})


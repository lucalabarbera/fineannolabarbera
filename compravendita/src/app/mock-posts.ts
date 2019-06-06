import { Post } from './post';

export const Posts: Post[] = [
  { nome:'DUCATI SUPERSPORT',
    tipo:'sportiva',
    prezzo:7500,
    descrizione:'Ducati supersport 5.000 km ',
    nomeUtente:'Luca',
    cognomeUtente:'Laba',
    username:'luca.laba',
    data:'18:18, il 18/02/2018',
    commenti:[
      {
        testo:'Ha lo scarico originale?',
        cognomeUtente: 'Novembre',
        nomeUtente:'Valerossi',
        username:'VR',
        data: '23:15, il 24/02/2018'
      },
      {
        testo:'No monta un akrapovic',
        cognomeUtente: 'Laba',
        nomeUtente:'LucaLaba',
        username:'luca.laba',
        data: '21:54, il 24/04/2019'
      }]
  },
  { nome:'suzyky rs450',
    tipo:'veicolo',
    prezzo:12500,
    descrizione:'mai usata vendo per infortunio',
    nomeUtente:'marc',
    cognomeUtente:'marquez',
    username:'m93',
    data:'08:30 , il 25/05/2010',
    commenti:[
      { testo:'gia venduta?',
        cognomeUtente: 'Jorge',
        nomeUtente:'lorenzo',
        username:'Jlorenzo',
        data: '18:18, il 27/05/2012'
      }]
  }
];

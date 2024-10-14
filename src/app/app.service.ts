import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  allBag = [
    {
      id:1,
      image: '/assets/black.jpeg',
      name: 'Clutch black',
      description: 'Clutch nero con catenella abbinata, perfetta per il tuo look elegante.',
      new: false,
      price: 30,
      color: 'black',
      inCart: false
    },
    {
      id:2,
      image: '/assets/double-green.jpeg',
      name: 'Clutch green con catenella',
      description: 'Clutch verde con catenella abbinata, casual senza perdere classe ed eleganza.',
      new: true,
      price: 30,
      color: 'green',
      inCart: false
    },
    {
      id:3,
      image: '/assets/green-2.jpeg',
      name: 'Clutch green',
      description: 'Clutch verde lime, se ti piace farti notare e non passare inosservata, devi assolutamente averla!',
      new: true,
      price: 30,
      color: 'lightgreen',
      inCart: false
    },
    {
      id:4,
      image: '/assets/yellow.jpeg',
      name: 'Clutch yellow',
      description: 'Clutch giallo luminoso, illumina le tue giornate.',
      new: false,
      price: 30,
      color: 'yellow',
      inCart: false
    },
    {
      id:5,
      image: '/assets/light-blue.jpeg',
      name: 'Bag con foulard',
      description: "Borsa bianca con sfumature blu in abbinata con foulard, signorile ma giovanile, adatta a tutti senza dare troppo nell'occhio.",
      new: true,
      price: 45,
      color: 'lightblue',
      inCart: false
    },
    {
      id:6,
      image: '/assets/light-green.jpeg',
      name: 'Clutch tropicana',
      description: 'Clutch tropicana, stai programmando una vacanza estiva? è il momento di acquistarla!',
      new: false,
      price: 30,
      color: 'beige',
      inCart: false
    },
    {
      id:7,
      image: '/assets/pink.jpeg',
      name: 'Clutch barbie',
      description: 'Clutch rosa fluo in stile barbie, appariscente senza dover rinunciare alla classe.',
      new: false,
      price: 30,
      color: 'rgb(255, 67, 130)',
      inCart: false
    },
    {
      id:8,
      image: '/assets/purple.jpeg',
      name: 'Clutch purple',
      description: 'Clutch viola, stavolta più neutra meno luminoso, se ti piace passare inosservata è perfetta per te!',
      new: true,
      price: 30,
      color: 'purple',
      inCart: false
    },
    {
      id:9,
      image: '/assets/terra-big.jpeg',
      name: 'Bag peanut',
      description: 'Borsa color terra di siena, dai un tocco campagnolo al tuo stile.',
      new: false,
      price: 40,
      color: 'rgb(245, 191, 126)',
      inCart: false
    },
    {
      id:10,
      image: '/assets/white-dark.jpeg',
      name: 'Pochette white con glitter',
      description: 'Pochette bianca con glitter, non sai più dove mettere i tuoi accessori? cosa aspetti a comprarla!',
      new: false,
      price: 20,
      color: 'whitesmoke',
      inCart: false
    },
    {
      id:11,
      image: '/assets/terra.jpeg',
      name: 'Clutch peanut',
      description: 'Clutch nocciola, raffinata ed elegante.',
      new: false,
      price: 30,
      color: 'bisque',
      inCart: false
    },
    {
      id:12,
      image: '/assets/white.jpeg',
      name: 'Clutch all white',
      description: 'Clutch bianca, se non vuoi una borsetta troppo vistosa e poco abbinabile questa è perfetta per te!',
      new: false,
      price: 30,
      color: 'white',
      inCart: false
    },
    {
      id:13,
      image: '/assets/green.jpeg',
      name: 'Clutch green',
      description: 'Clutch verde lime, se ti piace farti notare e non passare inosservata, devi assolutamente averla!',
      new: false,
      price: 30,
      color: 'lightgreen',
      inCart: false
    },
  ]
}

import { nanoid } from 'nanoid';

import turkey from '../../img/info/turkey.jpg';
import coffee from '../../img/info/coffee.jpg';
import hotel from '../../img/info/hotel.jpg';

const cardItems = [
  {
    id: nanoid(),
    img: turkey,
    alt: 'turkey',
    title: 'Not only beaches: extreme excursions in Turkey',
    text: 'Extreme recreation in Turkey is becoming more and more popular. Even more tourists are looking for new experiences and adrenaline. Visit us and experience it!',
    to: '/login',
  },
  {
    id: nanoid(),
    img: coffee,
    alt: 'coffee',
    title: 'Countries with the most delicious coffee',
    text: "Sip aromatic coffee under the rising sun or in a cozy restaurant with picturesque views. What could be better? Explore countries known for the world's most delicious coffee with us.",
    to: '/login',
  },
  {
    id: nanoid(),
    img: hotel,
    alt: 'hotel',
    title: 'Ten most beautiful hotels in the world',
    text: "Planning an unforgettable trip? Where you stay matters most. Discover the world's most beautiful hotels with us.",
    to: '/login',
  },
];

export default cardItems;

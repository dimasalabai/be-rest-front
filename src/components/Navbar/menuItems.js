import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    id: nanoid(),
    to: '/about',
    text: 'About us',
    private: false,
  },
  {
    id: nanoid(),
    to: '/countries',
    text: 'Countries',
    private: false,
  },
];

export default menuItems;

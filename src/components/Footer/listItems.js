import { nanoid } from 'nanoid';

import icon from '../../img/icons.svg';
import instagramIcon from '../../img/instagram.svg';

export const getInTouchList = [
  {
    id: nanoid(),
    title: 'Address',
    text: '3424 Garmatna, 63, Kyiv',
    icon: `${icon}#icon-address`,
  },
  {
    id: nanoid(),
    title: 'Phone',
    text: '(380) 096-000-11-22',
    icon: `${icon}#icon-phone`,
  },
  {
    id: nanoid(),
    title: 'E-Mail',
    text: 'berest@gmail.com',
    icon: `${icon}#icon-mail`,
  },
];

export const socialMediaList = [
  {
    id: nanoid(),
    icon: `${icon}#icon-facebook`,
    link: 'https://www.facebook.com/?locale=uk_UA',
  },
  {
    id: nanoid(),
    icon: `${icon}#icon-instagram`,
    link: 'https://www.instagram.com/',
  },
  {
    id: nanoid(),
    icon: `${icon}#icon-twitter`,
    link: 'https://x.com/?lang=uk',
  },
  {
    id: nanoid(),
    icon: `${icon}#icon-youtube`,
    link: 'https://www.youtube.com/',
  },
];

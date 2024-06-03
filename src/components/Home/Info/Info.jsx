import styles from './info.module.css';

import { NavLink } from 'react-router-dom';

import cardItems from './cards';

const Info = () => {
  const cards = cardItems.map(({ id, img, alt, title, text, to }) => {
    return (
      <li key={id} className={styles.cardItem}>
        <div className={styles.cardImage}>
          <img src={img} alt={alt} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
        <NavLink className={styles.cardButton} to={to}>
          See more
        </NavLink>
      </li>
    );
  });
  return (
    <section className={styles.info}>
      <div className="container">
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>
            Travel smart: Useful tips and information
          </h2>
          <ul className={styles.cerdsContainer}>{cards}</ul>
        </div>
      </div>
    </section>
  );
};
export default Info;

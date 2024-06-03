import styles from './hero.module.css';
import circlesImages from '../../../img/main-img.png';

import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              The <span>Breeze</span> of <span>Rest</span>: <br /> where
              memorize are made
            </h1>
            <h2 className={styles.subtitle}>
              Welcome to our world of adventure and discovery: start your
              journey with us
            </h2>
            <NavLink className={styles.link} to="/login">
              Explore now
            </NavLink>
          </div>
          <div className={styles.picture}>
            <img src={circlesImages} alt="Cirle imgs" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

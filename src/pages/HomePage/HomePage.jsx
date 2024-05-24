import styles from './home-page.module.css';

import Hero from 'components/Hero/Hero';
import Info from 'components/Info/Info';
import Contact from 'components/Contact/Contact';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Info />
      <Contact />
    </main>
  );
};
export default HomePage;

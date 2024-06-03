import styles from './home-page.module.css';

import Hero from 'components/Home/Hero/Hero';
import Info from 'components/Home/Info/Info';
import Contact from 'components/Home/Contact/Contact';

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

import styles from './footer.module.css';
import { getInTouchList } from './listItems';
import { socialMediaList } from './listItems';

const Footer = () => {
  const getInTouchItems = getInTouchList.map(({ id, title, text, icon }) => {
    return (
      <li key={id} className={styles.getInTouchItem}>
        <div className={styles.wrapIcon}>
          <svg className={styles.getInTouchIcon} width="24" height="24">
            <use href={icon} />
          </svg>
        </div>
        <div>
          <h4 className={styles.getInTouchTitle}>{title}</h4>
          <p className={styles.getInTouchText}>{text}</p>
        </div>
      </li>
    );
  });

  const socialMediaItems = socialMediaList.map(({ id, icon, link }) => {
    return (
      <li key={id} className={styles.socialMediaItem}>
        <a href={link}>
          <svg className={styles.socialMediaIcon} width="32" height="32">
            <use href={icon} />
          </svg>
        </a>
      </li>
    );
  });

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.logoBlock}>
            <h1 className={styles.logo}>
              <span>Be</span>
              Rest
            </h1>
            <p className={styles.logoText}>
              Discover, Explore, Experience - Your Journey Begins Here!
            </p>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.getInTouch}>
              <h2 className={styles.titleContact}>Get in touch</h2>
              <ul className={styles.getInTouchList}>{getInTouchItems}</ul>
            </div>
            <div className={styles.socialMedia}>
              <h2 className={styles.titleContact}>We in social media</h2>
              <ul className={styles.socialMediaList}>{socialMediaItems}</ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p className={styles.bottomText}>© 2024 - BEREST</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

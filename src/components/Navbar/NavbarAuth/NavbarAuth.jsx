import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink to="login" className={`${styles.link} ${styles.linkBlue}`}>
        Login
      </NavLink>
      <NavLink to="register" className={styles.link}>
        Register
      </NavLink>
    </div>
  );
};
export default NavbarAuth;

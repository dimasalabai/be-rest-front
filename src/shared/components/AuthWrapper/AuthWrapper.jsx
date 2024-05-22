import styles from './auth-wrapper.module.css';

const AuthWrapper = ({ title, children }) => {
  return (
    <div className="container">
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
export default AuthWrapper;

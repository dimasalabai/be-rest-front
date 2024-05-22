import { useState, useId } from 'react';

import styles from './login-form.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setState({ ...INITIAL_STATE });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });

    resetForm();
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.block}>
          <input
            className={styles.input}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            id={emailId}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.block}>
          <input
            className={styles.input}
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            id={passwordId}
            placeholder="Confirm a password"
            required
          />
        </div>
        <button type="submit" className={styles.btnLogin}>
          Login
        </button>
      </form>
    </>
  );
};
export default LoginForm;

import styles from './contact-form.module.css';
import { Notify } from 'notiflix';

import { useState, useId } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = ({ onSubmit }) => {
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
  const validateInput = () => {
    return state.name.trim() !== '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    if (!validateInput()) {
      Notify.failure('Name cannot be empty');
      return;
    }

    Notify.success('Message send success');

    resetForm();
  };
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const { name, email, message } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.block}>
        <input
          className={styles.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id={nameId}
          placeholder="Name"
          required
        />
      </div>
      <div className={styles.block}>
        <input
          className={styles.input}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          placeholder="Email"
          required
        />
      </div>
      <div className={styles.block}>
        <textarea
          className={styles.textarea}
          name="message"
          onChange={handleChange}
          id={messageId}
          value={message}
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className={styles.btnSend}>
        Send Message
      </button>
    </form>
  );
};
export default ContactForm;

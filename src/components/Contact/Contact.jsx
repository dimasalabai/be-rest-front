import styles from './contact.module.css';

import ContactForm from './ContactForm/ContactForm';

import { sendUserNeedHelp } from 'api/email-api';

const Contact = () => {
  const forSubmitNeedHelp = async ({ message, name, email }) => {
    try {
      const data = { message, name, email };
      console.log(data);
      await sendUserNeedHelp(data);
    } catch (error) {
      console.error('Failed to send a help request', error);
    }
  };
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Contact us</h2>
        <h3 className={styles.subtitle}>
          You can write to us by mail, or leave your contact details and we will
          definitely contact you in the near future
        </h3>

        <ContactForm onSubmit={forSubmitNeedHelp} />
      </div>
    </section>
  );
};
export default Contact;

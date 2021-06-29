import { useState } from 'react';
import styles from './ContactUs.module.scss';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service_sra',
        'contact_form_to_sra',
        e.target,
        'user_NyS5GVNsxnRp1kX3UZeSO'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <>
      <div className={styles.contactForm}>
        <div className={styles.formOverlay}></div>
        <form onSubmit={onFormSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='user_name'
            id='name'
            className={styles.name}
            placeholder='Name'
            autoComplete='name'
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='user_email'
            id='email'
            className={styles.email}
            placeholder='Email'
            autoComplete='email'
          />
          <label htmlFor='message'>Message for us:</label>
          <textarea
            name='user_message'
            id='message'
            className={styles.message}
            placeholder='Message'
            autoComplete='off'
            rows='3'
          ></textarea>

          <input type='submit' value='Submit!' />
        </form>
      </div>
    </>
  );
};

export default ContactUs;


import { useState } from 'react';
import styles from './ContactUs.module.scss';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const [submissioncheck, setsubmissioncheck] = useState(false);
  const onFormSubmit = (e) => {

    e.preventDefault();
    const newEntry = {
      email: email,
      name: name,
      message: message
    }
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);


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
          setsubmissioncheck(true);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='user_email'
            id='email'
            className={styles.email}
            placeholder='Email'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='message'>Message for us:</label>
          <textarea
            name='user_message'
            id='message'
            className={styles.message}
            placeholder='Message'
            autoComplete='off'
            rows='3'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <input type='submit' value='Submit!' />

        </form>
      </div>
      {submissioncheck && <div className={styles.Dialog1}>form submitted successfully</div>}

    </>
  );
};

export default ContactUs;

import { useState } from 'react';
import styles from './ContactUs.module.scss';
import emailjs from 'emailjs-com';
import Dialog from './Dialog';

import { useForm } from 'react-hook-form';


const ContactUs = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');



  let [formclose, setformclose] = useState(true);
  function funcls() {
    setformclose(!formclose);
    console.log("form submitted")
  }


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
          console.log("result")
        },
        (error) => {
          console.log(error.text);
          console.log("error")
        }
      );

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div>
      <section>
        {formclose ? (
          <div>
            <>
              <div className={styles.contactForm}>
                <div className={styles.formOverlay}></div>
                <form onSubmit={onFormSubmit} method="POST" noValidate>

                  <label htmlFor='name'>Name:</label>
                  <input
                    type='text'
                    name='user_name'
                    id='name'
                    className={styles.name}
                    placeholder='Name'
                    autoComplete='name'
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
                    required
                  />
                  <label htmlFor='message'>Message for us:</label>
                  <textarea
                    name='user_message'
                    id='message'
                    type='text'
                    className={styles.message}
                    placeholder='Message'
                    autoComplete='off'
                    rows='3'
                    required
                  ></textarea>

                  <input type='submit' value='Submit!' onClick={funcls} />
                </form>
              </div>
            </>
          </div>) : (
          <div>
            < Dialog dog="Form submitted successfully!!!" />
          </div>
        )}
      </section>

    </div>
  )
};


export default ContactUs;

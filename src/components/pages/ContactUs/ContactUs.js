import { useState, useRef } from 'react';
import styles from './ContactUs.module.scss';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'contact_service_sra',
        'contact_form_to_sra',
        formRef.current,
        'user_NyS5GVNsxnRp1kX3UZeSO'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.formOverlay}></div>
      <form ref={formRef} onSubmit={onFormSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='user_name'
          id='name'
          className={styles.name}
          placeholder='Name'
          autoComplete='name'
          required
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
        <label htmlFor='message'>Message for us:</label>
        <textarea
          name='user_message'
          id='message'
          className={styles.message}
          placeholder='Message'
          autoComplete='off'
          rows='3'
          required
          disabled={isSubmitting}
        ></textarea>

        {submitStatus === 'success' && (
          <p className={styles.successMessage}>Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className={styles.errorMessage}>
            Failed to send message. Please try again.
          </p>
        )}

        <input
          type='submit'
          value={isSubmitting ? 'Sending...' : 'Submit!'}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ContactUs;

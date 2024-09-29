import { FormEvent, useState } from 'react';
import styles from './Form.module.scss';
import classNames from 'classnames';
import { checkFormField } from '../../utils/checkFormFields';



export const Form = () => {
  const [field, setField] = useState({
    email: '',
    subject: '',
    volunteerToBe: false,
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const updateInput = (currentField: string, newValue: string) => {
    setField((prevState) => ({ ...prevState, [`${currentField}`]: newValue }));
    setErrors({
      email: '',
      subject: '',
      message: ''
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedField = {
      email: field.email.trim(),
      subject: field.subject.trim(),
      message: field.message.trim()
    };

    setErrors(checkFormField(normalizedField));
    if (errors.email || errors.message || errors.subject) {
      return;
    }

    setField({
      email: '',
      subject: '',
      volunteerToBe: false,
      message: ''
    })
  }


  return (
    <section className={styles.container} id='contact-form'>
      <h2 className={`${styles.header} heading--h2`}>Contact Us</h2>
      <form className={styles.form} autoComplete='off' noValidate onSubmit={handleSubmit}>
        <label htmlFor="email">
          Your email adress
          <br />
          <input
            className={classNames(`${styles.formFiled}`, {
              [`${styles.notValid}`]: errors.email
            })}
            value={field.email}
            onChange={(e) => { updateInput('email', e.target.value) }}
            type="email"
            name="email"
            id="email"
            placeholder="email@gmail.com"
          />
          {errors.email && <p className={styles.notValid__text}>{errors.email}</p>}
        </label>


        <label htmlFor="suject">
          Subject
          <br />
          <input type="text" name="suject"
            className={classNames(`${styles.formFiled}`, {
              [`${styles.notValid}`]: errors.subject
            })}
            value={field.subject}
            onChange={(e) => { updateInput('subject', e.target.value) }}
            id="suject"
            placeholder="Type the topic of your request" />
          {errors.subject && <p className={styles.notValid__text}>{errors.subject}</p>}
        </label>

        <label htmlFor="volunteer">

          <input type="checkbox" name="volunteer" id="volunteer" className={styles.checkbox} />
          I want to become your volunteer

        </label>
        <label htmlFor="messageText">
          Description
          <br />
          <textarea
            className={classNames(`${styles.textArea} ${styles.formFiled}`, {
              [`${styles.notValid}`]: errors.message
            })}
            placeholder='Type your notes...'
            value={field.message}
            onChange={(e) => { updateInput('message', e.target.value) }}
          ></textarea>
          {errors.message && <p className={styles.notValid__text}>{errors.message}</p>}
          <p className={styles.text}>Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
        </label>
        <button type='submit' className={`${styles.button} button--yellow button--secondary`}>SUBMIT</button>
      </form>
      
      


    </section>
  )
}
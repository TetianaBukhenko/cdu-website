import { HashLink } from 'react-router-hash-link';
import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';
import styles from './Header.module.scss';

export const Header = () => {
  const { isVisible, container } = useElementOnScreen();
  return (
    <header>
      <section className={styles.header__main}>
        <div className={styles.header__icons}>
          <a target='_blank' href='https://www.facebook.com/CDUkraine' rel="noreferrer" ><div className="icon icon--medium icon--hover icon--facebook" ></div></a>
          <a target='_blank' href='https://www.instagram.com/civildefense.ukraine/?igsh=MTl4d2trODR5dWNtaA%3D%3D' rel="noreferrer"><div className="icon icon--medium icon--hover icon--instagram"></div></a>
          <a target='_blank' href='https://www.linkedin.com/posts/cdukraine_activity-7212520706830471169-3qV2/' rel="noreferrer"><div className="icon  icon--medium icon--hover icon--linkedin"></div></a>
        </div>
        <h2 ref={container} className={`${styles.header__title} heading--h2 hide--left ${!isVisible ? '' : 'show'}`}>
          We are charity organization that raises funds and humanitarian help for Ukrainian people
        </h2>
        <p className={`${styles.header__text} hide--right ${!isVisible ? '' : 'show'}`}>
          With our combined efforts, we are getting closer to bringing peace and support to Ukraine.
          At the same time, we are fighting for peace in the modern civilized world.
        </p>

        <HashLink to="/#donate" className={`${styles.header__button} button--yellow`}><p>HELP US</p></HashLink>
      </section>
    </header>
  );
};

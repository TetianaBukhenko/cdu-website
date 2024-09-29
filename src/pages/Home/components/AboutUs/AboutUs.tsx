import { Link } from 'react-router-dom';
import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';
import styles from './AboutUs.module.scss';


export const AboutUs = () => {
  const { isVisible, container } = useElementOnScreen();

  console.log('about us', isVisible);


  return <section ref={container} className={styles.container}>
    <picture className={`${styles.img} `}>
      <source media="(min-width: 1240px)" srcSet="./imgs/about-us/about-us-desktop.png"  />
      <source media="(min-width: 834px)" srcSet="./imgs/about-us/about-us-tablet.png" />
      <img src="./imgs/about-us/about-us.png" alt="Civil Defense Ukraine Team" className={`${styles.img} hide--left ${isVisible ? 'show' : ''}`} />
    </picture>

    <div className={`${styles.text} hide--right ${isVisible ? 'show' : ''}`}>
      <h2 className={styles.title}>About Us</h2>
      <p>Civil Defense Ukraine is a charity organization that raises funds and humanitarian help to Ukraine. It is founded at 2022 in Fredericia, Denmark. Currently there are 25 people working volunteerly in our organisation. We are from Ukraine and spending our spare time to help to people in need. </p>

      <Link to="about-us" className='button--withArrow'>
        <p>read more</p><div className='icon icon--arrow button--withArrow-icon'></div>
      </Link></div>
  </section>
}
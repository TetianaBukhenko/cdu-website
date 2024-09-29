import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';
import styles from './Donate.module.scss';

export const Donate = () => {
  const { isVisible, container } = useElementOnScreen();

  return <section ref={container}  className={styles.container} id={'donate'}>
    <h2 className={`${styles.heading} heading--h1 hide--left ${isVisible ? 'show' : ''}`}>Contribute to the victory! <br /> Together we can restore a peaceful and happy life in Ukraine!</h2>
    <img src="./imgs/mobilePay.png" alt="mobile pay" className={`${styles.img} hide--right ${isVisible ? 'show' : ''}`} />
  </section>
}
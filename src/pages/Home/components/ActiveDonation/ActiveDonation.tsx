import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';
import styles from './ActiveDonation.module.scss';

export const ActiveDonation = () => {
  const { isVisible, container } = useElementOnScreen();

  return (
    <section ref={container} className={styles.container}>
      <h2 className="heading--h2">Active Donations</h2>
      <div className={styles.gridBox}>
        <div className={`${styles.gridBox__logo} hide--left ${isVisible ? 'show' : ''}`}></div>
        <img className={`${styles.gridBox__img} hide--right ${isVisible ? 'show' : ''}`} src="./imgs/activeDonation.png" alt="current goal"  />
      </div>
    </section>
  )

}

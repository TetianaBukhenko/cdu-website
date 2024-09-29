import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';
import { CounterUpPage } from './CounterUpPage';
import styles from './Achievements.module.scss';


export const Achievements = () => {
  const { isVisible, container } = useElementOnScreen();
  console.log('achievents');

  return (
    <section ref={container} className={`${styles.container} hide--bottom ${isVisible && 'show'}`}>
      <div className={styles.container__bg}>
        <h2 className='heading--h2'> Our Achievements</h2>
        <article className={styles.items}>
          {isVisible && <><div className={styles.item}>
            <CounterUpPage endValue={1000000} />
            <p className={styles.item__text}>Danish Krones Collected</p>
          </div>
            <div className={styles.item}>
              <CounterUpPage endValue={120000} />
              <p className={styles.item__text}>Food has been donated to army</p>
            </div>
            <div className={styles.item}>
              <CounterUpPage endValue={10000} />
              <p className={styles.item__text}>People trusted us and made donation</p>
            </div>
            <div className={styles.item}>
              <CounterUpPage endValue={5000} />
              <p className={styles.item__text}>Ammo has donated to army</p>
            </div>
          </>}
        </article>

      </div></section>

  );
}

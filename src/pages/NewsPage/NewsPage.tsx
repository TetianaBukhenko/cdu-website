import { useLocation } from 'react-router-dom';
import styles from './NewsPage.module.scss';

export const NewsPage = () => {
  const { pathname } = useLocation();

  return (<section className={styles.container}>
    <div className={styles.header}>
      <div className={styles.breadcrmbs}> <p>home</p>{
        pathname.slice(1).split('/').map((path) => {
          return <>
            <div className='icon icon--arrow icon--small'></div>
            <p>{path}</p>
          </>
        })}</div>
    </div>
    <h1>News Page</h1>
  </section>)
}
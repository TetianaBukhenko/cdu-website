import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';


import styles from './LatestNews.module.scss';
import { useAppSelector } from '../../app/hooks';
import { useWidth } from '../../hooks/useWidth';
import { useElementOnScreen } from '../../hooks/useElementOnScreen';

import { NewsCard } from '../NewsCard';
import { Error } from '../Error';
import { SkeletonNewsCard } from '../NewsCard/SkeletonNewsCard';

export const LatestNews = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const { isVisible, container } = useElementOnScreen();
  const { news, loading, error } = useAppSelector(state => state.news);

  const width = useWidth();
  const currentNews = useMemo(() => {
    return news.slice(0, 10);
  }, [news]);
  const itemsPerPage = useMemo(() => (width >= 834 ? 2 : 1), [width]);

  return (
    <section ref={container} className={styles.container}>
      <h2 className={`${styles.header} heading--h2`}>Latest News</h2>

      {loading && (
        <div className={styles.center}>
          <div
            className={`${styles.articles} hide--bottom ${isVisible ? 'show' : ''}`}
          >
            <SkeletonNewsCard />
            <SkeletonNewsCard />
          </div>
        </div>
      )}
      {error && (
        <div className={styles.center}>
          <Error />
        </div>
      )}
      {!loading && !error && (
        <>
          <div
            className={`${styles.articles} hide--bottom ${isVisible ? 'show' : ''}`}
          >
            {currentNews.map(article => (
              <NewsCard
                newsData={article}
                key={article.id}
                style={{
                  transform: `translateX(calc(-100% * ${displayIndex} - 16px * ${displayIndex}))`,
                }}
              />
            ))}
          </div>

          <button
            className={`${styles.button} ${styles.button__left}`}
            disabled={displayIndex <= 0}
            onClick={() => {
              setDisplayIndex(prev => prev - 1);
            }}
          >
            <div className="icon icon--arrow"></div>
          </button>
          <button
            className={styles.button}
            disabled={displayIndex >= currentNews.length - itemsPerPage}
            onClick={() => {
              setDisplayIndex(prev => prev + 1);
            }}
          >
            <div className="icon icon--arrow"></div>
          </button>

          <Link
            to={'/news'}
            className={`${styles.mainButton}  button--secondary button--transparent`}
          >
            <p className="text--button">SEE ALL</p>
          </Link>
        </>
      )}
    </section>
  );
};

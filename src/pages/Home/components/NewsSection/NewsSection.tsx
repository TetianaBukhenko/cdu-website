import { useMemo, useState } from 'react';
import { News } from '../../../../types/News';
import styles from './News.module.scss';
import { useWidth } from '../../../../hooks/useWidth';
import { NewsCard } from '../../../../components/NewsCard';
import { Link } from 'react-router-dom';
import { useElementOnScreen } from '../../../../hooks/useElementOnScreen';

export const NewsSection = () => {
  const newsArticles: News[] = [{
    id: 1,
    img: './imgs/news/image_1.png',
    type: 'news',
    title: '1 creative Dage Exhibition',
    date: new Date(2024, 9, 1),
    text: 'Civil Defense Ukraine is a charity organization that raises funds and humanitarian help to Ukraine. It is founded at 2022 in Fredericia, Denmark. Currently there are 25 people working volunteerly in our organisation. We are from Ukraine and spending our spare time to help to people in need. ',
  }, {
    id: 2,
    img: './imgs/news/image_1.png',
    type: 'news',
    title: '2 creative Dage Exhibition',
    date: new Date(2024, 9, 2),
    text: 'Civil Defense Ukraine is a charity organization that raises funds and humanitarian help to Ukraine. It is founded at 2022 in Fredericia, Denmark. Currently there are 25 people working volunteerly in our organisation. We are from Ukraine and spending our spare time to help to people in need. ',
  }, {
    id: 3,
    img: './imgs/news/image_1.png',
    type: 'news',
    title: '3 creative Dage Exhibition',
    date: new Date(2024, 9, 3),
    text: 'Civil Defense Ukraine is a charity organization that raises funds and humanitarian help to Ukraine. It is founded at 2022 in Fredericia, Denmark. Currently there are 25 people working volunteerly in our organisation. We are from Ukraine and spending our spare time to help to people in need. ',
  }];

  const news = JSON.stringify(newsArticles);

  console.log(news);

  const [displayIndex, setDisplayIndex] = useState(0);
  const width = useWidth();
  const { isVisible, container } = useElementOnScreen();


  return (
    <section ref={container}  className={styles.container}>
      <h2 className={`${styles.header} heading--h2`}>Latest News</h2>
      <div className={`${styles.articles} hide--bottom ${isVisible ? 'show' : ''}`}>
        {newsArticles.map((article, curIndex) => (
          <NewsCard
            newsData={article}
            key={article.date.toDateString()}
            style={{
              transform: `translateX(calc(-100% * ${displayIndex} - 16px * ${displayIndex}))`
            }}

          />))}
      </div>

      <button className={`${styles.button} ${styles.button__left}`} disabled={displayIndex <= 0} onClick={() => {
        setDisplayIndex(prev => prev - 1)
      }}>
        <div className="icon icon--arrow"></div>
      </button>
      <button
        className={styles.button}
        disabled={displayIndex > newsArticles.length - 2}
        onClick={() => {
          setDisplayIndex(prev => prev + 1)
        }}>
        <div className="icon icon--arrow"></div>
      </button>

      <Link to={'news'} className={`${styles.mainButton}  button--secondary button--transparent`}>
        <p className="text--button">SEE ALL</p>
      </Link >
    </section>
  )
}
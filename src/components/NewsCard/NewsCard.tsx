import { CSSProperties } from "react";
import { News } from "../../types/News";
import styles from './NewsCard.module.scss';

type Props = {
  newsData: News
  style?: CSSProperties
}

const normalizeData = {
  title(title: string) {
    return title
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  },
  date(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
export const NewsCard: React.FC<Props> = ({ newsData, style }) => {
  const { id, img, type, title, date, text } = newsData;
  const titleForLink = title.split(' ').join('-');

  console.log(date);


  return <article className={styles.container} style={style}>
    <img className={styles.img} src={img} alt={title} />
    <div className={styles.tag}>{type}</div>
    <div className={`${styles.header}`}>
      <h3 className={`${styles.heading} heading--3`}>{normalizeData.title(title)}</h3>
      <p className={styles.date}> {normalizeData.date(date)} </p>
    </div>
    <p className={styles.mainText}>{text}</p>
    <a href={`/news/${titleForLink}`} className={`${styles.button} button--withArrow`}>
      <p>read more</p><div className='icon icon--arrow button--withArrow-icon'></div>
    </a>
  </article>
} 

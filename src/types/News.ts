export type News = {
  id: number,
  img: string,
  type: 'news' | 'report' | 'event',
  title: string,
  date: Date,
  text: string,
}
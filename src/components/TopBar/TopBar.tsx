import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './TopBar.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
(classNames(`${styles.nav__link}  link`, {
  'link--active': isActive
}))

export const TopBar = () => {
  return <div className={styles.topBar}>
    <Link to='/'>
      <img className={styles.topBar__logo} src="/imgs/logo.png" alt="CDU logo" />
    </Link>
    <ul className={`${styles.topBar__nav} ${styles.nav}`}>
      <li className={styles.nav__item}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="about-us" className={getLinkClass}>
          About Us
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="news" className={getLinkClass}>
          News
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="reports" className={getLinkClass}>
          Reports
        </NavLink>
      </li>
    </ul>
    <HashLink className={`${styles.topBar__button}`} to='/#contact-form'>CONTACT US </HashLink>
    <div className={`${styles.topBar__icon} icon icon--menu`}>
    </div>
  </div>
}
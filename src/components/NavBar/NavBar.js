import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.navIcon}>
            <a href="/" className="fa fa-connectdevelop"></a>
          </div>
          <div className={styles.navList}>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/favorite">Favourites</Link>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

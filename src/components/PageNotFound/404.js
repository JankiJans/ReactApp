import styles from './404.module.scss';

const NotFound = () => {
  return (
    <div className={styles.NotFoundContainer}>
      <h1 className={styles.NotFoundError}>404</h1>
      <p className={styles.NotFound}>Page not found</p>
      <div className={styles.NotFoundIcon}>
        <a href="/" className="fa fa-window-close-o"></a>
      </div>
    </div>
  );
};

export default NotFound;

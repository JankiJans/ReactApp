import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const searchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search…"/>
      <Button txt="search"/>
    </form>
  );
};

export default searchForm;

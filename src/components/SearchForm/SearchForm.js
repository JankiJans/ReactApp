import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const searchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput>Search...</TextInput>
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default searchForm;

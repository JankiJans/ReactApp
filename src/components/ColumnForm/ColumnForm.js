import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = (props) => {
  const [title, setValue] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)
  const [icon, setIcon] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)

  const handleSubmit = (e) => {
    // tworzy funkcję, która będzie wywoływana po kliknięciu w przycisk
    e.preventDefault(); // zapobiega przeładowaniu strony po kliknięciu w przycisk
    props.action({ title: title, icon: icon }); // wywołuje funkcję przekazaną w propsach, która dodaje nową kolumnę do tablicy kolumn w App.js
    setValue(''); // czyści pole input po dodaniu nowej kolumny
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
        <span>Title:</span> <input type="text" value={title} onChange={(e) => setValue(e.target.value)} className={styles.inputStyle} />
        <span className={styles.inputText}>Icon: </span><input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} className={styles.inputStyle} />
        <Button>ADD COLUMN</Button>
    </form>
  );
};

export default ColumnForm;

import styles from './blogPage.module.css';
import CardList  from '../../components/cardList/CardList';
import Menu from '../../components/menu/Menu';

const Blogpage = () => {
  return (
    <div className={styles.container}>
      <h1>Style blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default Blogpage
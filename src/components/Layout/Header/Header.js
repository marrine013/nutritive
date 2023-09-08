import Container from '../../UI/Container/Container';

import styles from './Header.module.scss';
import logo from '../../../assets/img/logo.svg';
import SearchIcon from '../../UI/SearchIcon';
import FavoriteIcon from '../../UI/FavoriteIcon';
import ShoppingBagIcon from '../../UI/ShoppingBagIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className='flex'>
        <a href='/' className={styles.logo}>
          <img src={logo} alt='Nutritive cosmetics' />
        </a>
        <nav className={styles['top-menu']}>
          <ul>
            <li>
              <a href=''>Про нас</a>
            </li>
            <li>
              <a href=''>Доставка та оплата</a>
            </li>
            <li>
              <a href=''>Блог</a>
            </li>
            <li>
              <a href=''>Контакти</a>
            </li>
          </ul>
        </nav>
        <div className='flex'>
          <ul className={styles['icon-menu']}>
            <li>
              <a href=''>
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href='' className={styles['favorite-icon']}>
                <FavoriteIcon />
              </a>
            </li>
            <li>
              <a href=''>
                <ShoppingBagIcon />
              </a>
            </li>
          </ul>
          <div className={styles['burger-wrapper']}>
            <button className={styles['burger-menu']}></button>
          </div>
        </div>
      </Container>
      <div className={styles['brand-header']}>
        <Container>
          <div className={styles.brand}>NUTRITIVE cosmetics</div>
          <ul className={styles['main-menu']}>
            <li>
              <a href=''>Каталог</a>
            </li>
            <li>
              <a href=''>Новинки</a>
            </li>
            <li>
              <a href=''>Відгуки</a>
            </li>
            <li>
              <a href=''>Акції</a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;

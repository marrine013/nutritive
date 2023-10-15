import Container from '../../UI/Container/Container';

import styles from './Header.module.scss';
import logo from '../../../assets/img/logo.svg';
import SearchIcon from '../../UI/SearchIcon';
import FavoriteIcon from '../../UI/FavoriteIcon';
import ShoppingBagIcon from '../../UI/ShoppingBagIcon';

import { mainMenuList } from '../../../mock/mainMenuList';
import { addMenuList } from '../../../mock/addMenuList';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className='flex'>
        <a href='/' className={styles.logo}>
          <img src={logo} alt='Nutritive cosmetics' />
        </a>
        <nav className={styles['top-menu']}>
          <ul>
            {addMenuList.map(item => (
              <li key={item.id}>
                <a href=''>{item.name}</a>
              </li>
            ))}
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
            {mainMenuList.map(item => (
              <li key={item.id}>
                <a href=''>{item.name}</a>
                {item.submenu && item.submenu.length > 0 && (
                  <ul>
                    {item.submenu.map(submenuItem => (
                      <li key={submenuItem.id}>
                        <a href=''>{submenuItem.name}</a>
                      </li>
                    ))} 
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;

import styles from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';

import { mainMenuList } from '../../../mock/mainMenuList';
import { addMenuList } from '../../../mock/addMenuList';

import FbIcon from '../../UI/FbIcon';
import InstIcon from '../../UI/InstIcon';
import TgIcon from '../../UI/TgIcon';

import Container from '../../UI/Container/Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles['footer-grid']}>
        <img src={logo} className={styles.logo} alt='Nutritive cosmetics' />
        <nav className={styles['footer-menu']}>
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

          <ul>
            {addMenuList.map(item => (
              <li key={item.id}>
                <a href=''>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles['icon-menu']}>
          <li>
            <a href=''>
              <FbIcon />
            </a>
          </li>
          <li>
            <a href='' className={styles['favorite-icon']}>
              <TgIcon />
            </a>
          </li>
          <li>
            <a href=''>
              <InstIcon />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;

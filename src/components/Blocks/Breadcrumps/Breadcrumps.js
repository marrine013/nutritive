import Container from '../../UI/Container/Container';
import styles from './Breadcrumps.module.scss';

const Breadcrumps = () => {
  return (
    <nav className={styles.breadcrumps}>
      <Container>
        <ul>
          <li>
            <a href=''>Головна </a>
          </li>
          <li>
            <a href=''>Обличчя</a>
          </li>
          <li>
            <span>
              Нічний крем з протеїнами рису та олією каріте для сухої шкіри
              Lapush
            </span>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Breadcrumps;

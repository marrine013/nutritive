import Container from '../UI/Container/Container';
import Brand from './Brand';

import { brandList } from '../../mock/brandList';
import styles from './Brands.module.scss';

const Brands = () => {
  return (
    <Container>
      <h2>Бренди</h2>
      <div className={styles.brands}>
        {brandList.map(brand => (
          <Brand key={brand.id} imgSrc={brand.img} brandName={brand.name} />
        ))}
      </div>
    </Container>
  );
};

export default Brands;

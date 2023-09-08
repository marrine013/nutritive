import ItemCard from '../UI/ItemCard/ItemCard';
import Container from '../UI/Container/Container';

import { itemsList } from '../../mock/itemsList';
import styles from './ItemsList.module.scss';

const ItemsList = () => {
  return (
    <Container>
      <h2>Лідери продажу</h2>
      <div className={styles['items-list']}>
        {itemsList.map(item => (
          <ItemCard imgSrc={item.img} name={item.name} price={item.price} />
        ))}
      </div>
    </Container>
  );
};

export default ItemsList;

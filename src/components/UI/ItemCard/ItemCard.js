import Button from '../Button/Button';

import styles from './ItemCard.module.scss';

// import img from '../../../mock/img/face-mask.jpg';
import AddToFavoriteBtn from '../AddToFavoriteBtn/AddToFavoriteBtn';

const ItemCard = ({ name, imgSrc, price, className }) => {
  const classes = className
    ? `${styles['item-card']}  ${className}`
    : `${styles['item-card']}`;
  return (
    <div className={classes}>
      <a href='' className={styles['item-info']}>
        <span className={styles['img-block']}>
          <img src={imgSrc} alt={name} />
        </span>
        <span className={styles['item-name']}>{name}</span>
      </a>
      <span className={styles['item-price']}>{price} грн.</span>
      <div className='flex'>
        <Button className={styles['item-btn']} action={'купити'} />
        <AddToFavoriteBtn />
      </div>
    </div>
  );
};

export default ItemCard;

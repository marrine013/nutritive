import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import AddToFavoriteBtn from '../AddToFavoriteBtn/AddToFavoriteBtn';

import styles from './ItemCard.module.scss';

const ItemCard = ({ name, imgSrc, bigImgSrc, price, className }) => {
  const classes = className
    ? `${styles['item-card']}  ${className}`
    : `${styles['item-card']}`;
  const bigImgSource = bigImgSrc ? (
    <source srcSet={bigImgSrc} media='(min-width: 768px)' />
  ) : null;

  return (
    <div className={classes}>
      <Link to='item' className={styles['item-info']}>
        <span className={styles['img-block']}>
          <picture>
            {bigImgSource}
            <img src={imgSrc} alt={name} loading='lazy' decoding='async' />
          </picture>
        </span>
        <span className={styles['item-name']}>{name}</span>
      </Link>
      <span className={styles['item-price']}>{price} грн.</span>
      <div className='flex'>
        <Button className={styles['item-btn']} action={'купити'} />
        <AddToFavoriteBtn />
      </div>
    </div>
  );
};

export default ItemCard;

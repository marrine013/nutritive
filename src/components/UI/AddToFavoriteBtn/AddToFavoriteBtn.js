import FavoriteIcon from '../FavoriteIcon';

import styles from './AddToFavoriteBtn.module.scss';

const AddToFavoriteBtn = () => {
  return (
    <button type='button' className={styles['favorite-btn']}>
      <FavoriteIcon />
    </button>
  );
};

export default AddToFavoriteBtn;

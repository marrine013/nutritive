import styles from './Brands.module.scss';

const Brand = ({ imgSrc, brandName }) => {
  return (
    <a href='' className={styles.brand}>
      <img src={imgSrc} alt={brandName} />
    </a>
  );
};

export default Brand;

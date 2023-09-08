import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  const classes = `${styles.container} + ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;

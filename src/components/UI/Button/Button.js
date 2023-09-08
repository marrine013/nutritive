import styles from './Button.module.scss';

const Button = ({ action, className }) => {
  const classes = `${styles.button} + ${className}`;
  return (
    <button type='button' className={classes}>
      {action}
    </button>
  );
};

export default Button;

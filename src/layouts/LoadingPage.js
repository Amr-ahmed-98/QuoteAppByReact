import classes from './LoadingPage.module.css';
const LoadingPage = () => {
  return (
    <div className={classes['loading-container']}>
      <div className={classes['loading-circle']}></div>
    </div>
  );
};
export default LoadingPage;

import { Link } from 'react-router-dom';
import classes from './NoQuoteHere.module.css';
const NoQuoteHere = () => {
  return (
    <div className={classes.container}>
      <p> No Quote here </p>
      <div className={classes.btnContainer}>
        <Link to='/new-quote' className={classes.btn}>
          Make New Quote
        </Link>
      </div>
    </div>
  );
};
export default NoQuoteHere;

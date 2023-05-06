import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';
const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote className={classes.text}>
          <p>{props.text}</p>
        </blockquote>
        <figcaption className={classes.author}>{props.author}</figcaption>
      </figure>
      <Link className={classes.btn} to={`/quotes/${props.id}`}>
        View Details
      </Link>
    </li>
  );
};
export default QuoteItem;

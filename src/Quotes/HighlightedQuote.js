import classes from './HighlightedQuote.module.css';
const HighlightedQuote = (props) => {
  return (
    <figure className={classes.content}>
      <p>{props.text}</p>
      <figcaption>{props.auther}</figcaption>
    </figure>
  );
};
export default HighlightedQuote;

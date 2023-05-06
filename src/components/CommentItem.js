import classes from './CommentItem.module.css';
const CommentItem = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};
export default CommentItem;

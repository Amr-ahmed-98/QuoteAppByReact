import CommentItem from './CommentItem';
const CommentList = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.commentData.text} />
      ))}
    </ul>
  );
};
export default CommentList;

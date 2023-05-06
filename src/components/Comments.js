import { useCallback, useEffect, useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttps from '../hooks/use-https';
import { getAllComments } from '../lib/api';
import { useParams } from 'react-router-dom';
import LoadingPage from '../layouts/LoadingPage';
import CommentList from './CommentList';
const Comments = () => {
  const params = useParams();

  const [isComment, setIsComment] = useState(false);
  const quoteId = params.quoteId;
  const {
    sendRequest,
    data: loadedComments,
    status,
  } = useHttps(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;
  if (status === 'Pending') {
    comments = <LoadingPage />;
  }

  if (status === 'Completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }
  console.log(loadedComments);

  if (
    status === 'Completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = '';
  }

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const hideAndShowHandler = () => {
    setIsComment(true);
  };

  return (
    <section>
      <h2>User Comments</h2>
      {!isComment && (
        <button className={classes.btn} onClick={hideAndShowHandler}>
          Add Comment
        </button>
      )}
      {isComment && (
        <NewCommentForm onAddComment={addCommentHandler} quoteId={quoteId} />
      )}
      {comments}
    </section>
  );
};
export default Comments;

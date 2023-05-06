import { useEffect, useState } from 'react';
import classes from './NewCommentForm.module.css';
import useHttps from '../hooks/use-https';
import { addComment } from '../lib/api';
import LoadingPage from '../layouts/LoadingPage';

const NewCommentForm = (props) => {
  const [commitValue, setCommitValue] = useState('');
  const { sendRequest, status, error } = useHttps(addComment);
  const { onAddComment } = props;

  useEffect(() => {
    if (status === 'Completed' && !error) onAddComment();
  }, [status, onAddComment, error]);

  if (error) {
    return <p>{error}</p>;
  }

  const commitValueHandler = (e) => {
    setCommitValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (commitValue.trim().length > 4 && commitValue.length < 300) {
      sendRequest({
        commentData: { text: commitValue },
        quoteId: props.quoteId,
      });
    }
    setCommitValue('');
  };

  const conditionOfTrue =
    commitValue.trim().length > 4 && commitValue.length < 300;

  const isValueTrueClass =
    commitValue.trim().length > 4 && commitValue.length < 300
      ? classes.good
      : classes.error;

  const showBtnClass =
    commitValue.trim().length > 4 && commitValue.length < 300
      ? ''
      : classes.hideBtn;

  return (
    <form onSubmit={submitHandler} className={classes.formContent}>
      {status === 'Pending' && <LoadingPage />}
      <div className={classes.txtAreaField}>
        <label htmlFor='comment'> Your Comment is : </label>
        <textarea
          cols='30'
          rows='10'
          id='comment'
          name='comment'
          className={`${classes.txtArea} ${isValueTrueClass}`}
          placeholder='Enter your comment here ....'
          value={commitValue}
          onChange={commitValueHandler}
        ></textarea>
      </div>
      <div className={showBtnClass}>
        {isValueTrueClass && (
          <button className={classes.btn}> Add Comment </button>
        )}
      </div>
      {!conditionOfTrue && (
        <p className={classes['txt-not-true']}>
          Write something useful (min 5 character)
        </p>
      )}
    </form>
  );
};
export default NewCommentForm;

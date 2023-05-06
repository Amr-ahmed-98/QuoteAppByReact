import { useRef } from 'react';
import classes from './QuoteForm.module.css';
import { Fragment } from 'react';
import { Prompt } from 'react-router-dom';
import { useState } from 'react';
import LoadingPage from '../layouts/LoadingPage';

const QuoteForm = (props) => {
  const authorValue = useRef();
  const textValue = useRef();

  const [isEntering, setIsEntering] = useState(false);

  const formFocusHandler = () => {
    setIsEntering(true);
  };
  const addQuoteBtn = () => {
    setIsEntering(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddQuote({
      author: authorValue.current.value,
      text: textValue.current.value,
    });
  };
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={() => 'are you sure you want to leave 🥲'}
      />
      <form
        onFocus={formFocusHandler}
        className={classes.form}
        onSubmit={submitHandler}
      >
        {props.LoadingPage && <LoadingPage />}
        <div>
          <div className={classes.author}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorValue} />
          </div>
          <div className={classes.text}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' ref={textValue} />
          </div>
          <div className={classes.actions}>
            <button onClick={addQuoteBtn} type='submit'>
              Add Quote
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default QuoteForm;

import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory, useLocation } from 'react-router-dom';

const sorting = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';
  const sortedQuotes = props.quotes ? sorting(props.quotes, isAscending) : [];

  const sortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${isAscending ? 'desc' : 'asc'}`,
    });
  };
  return (
    <Fragment>
      <div className={classes.btnContainer}>
        <button onClick={sortHandler} type='button' className={classes.btn}>
          Order {isAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.theList}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
export default QuoteList;

import { useHistory } from 'react-router-dom';
import QuoteForm from '../Quotes/QuoteForm';
import useHttps from '../hooks/use-https';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttps(addQuote);

  useEffect(() => {
    if (status === 'Completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === 'Pending'} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuote;

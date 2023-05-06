import { useEffect } from 'react';
import QuoteList from '../Quotes/QuoteList';
import useHttps from '../hooks/use-https';
import { getAllQuotes } from '../lib/api';
import NoQuoteHere from '../components/NoQuoteHere';
import LoadingPage from '../layouts/LoadingPage';

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttps(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'Pending') {
    return <LoadingPage />;
  }

  if (status === 'Completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuoteHere />;
  }
  if (error) {
    return <p> {error} </p>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;

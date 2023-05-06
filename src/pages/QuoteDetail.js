import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/Comments';
import HighlightedQuote from '../Quotes/HighlightedQuote';
import { Fragment } from 'react';
import useHttps from '../hooks/use-https';
import { useEffect } from 'react';
import { getSingleQuote } from '../lib/api';
import LoadingPage from '../layouts/LoadingPage';

const QuoteDetail = () => {
  const parms = useParams();
  const match = useRouteMatch();

  const quoteId = parms.quoteId;
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttps(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'Pending') {
    return <LoadingPage />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  if (!loadedQuotes) {
    return <p className='centered'>there is no quote here</p>;
  }
  if (!loadedQuotes.text) {
    return <p>No Quote Found </p>;
  }

  return (
    <Fragment>
      <HighlightedQuote auther={loadedQuotes.auther} text={loadedQuotes.text} />
      <Route path={`${match.path}`} exact>
        <div className='btnLoad'>
          <Link className='loadBtn' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

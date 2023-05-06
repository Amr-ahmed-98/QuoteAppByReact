import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        {/* this to make you reach to your quotes */}
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        {/* this show specific details for each user */}
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        {/* this will take you to make new quote */}
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

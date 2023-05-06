import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes App</div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <NavLink
              to='/quotes'
              className={classes.navLink}
              activeClassName={classes.active}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-quote'
              className={classes.navLink}
              activeClassName={classes.active}
            >
              New Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;

import react from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '@context';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const { currentUser } = useAuthContext();

  return(
    <Route {...rest} render={props => (
      currentUser ? <Component {...props} /> : <Redirect to='/register' />
    )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../../services/Auth';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  const renderRoute = (rest) => {
    if (rest.private) {
      return (
        <Route
          {...rest}
          render={matchProps =>
            isAuthenticated() ? (<Layout><Component {...matchProps} /></Layout>) :
              (<Redirect to={{ path: "/sign-in", state: { from: matchProps.location } }} />)
          }
        />
      )
    }
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />)
  }
  
  return (
    renderRoute(rest)
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  private: PropTypes.string
};

export default RouteWithLayout;

// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({
//     component: Component,
//     user,
//     registeredUser,
//     ...rest
//   }) => {
//     const routeChecker = (attributes) => ((user && registeredUser)
//       ? (<Component {...attributes} user={user} registeredUser={registeredUser} />)
//       : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
//     return <Route {...rest} render={(props) => routeChecker(props)} />;
//   };

// PrivateRoute.propTypes = {
//     component: PropTypes.func,
//     user: PropTypes.any,
//     registeredUser: PropTypes.bool
//   };


function Routes({
    user,
}) {
    return (<>
        
    </>);
}

Routes.propTypes = {};

export default Routes;

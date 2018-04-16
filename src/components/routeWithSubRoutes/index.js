import React from 'react';
import reactRouter, { Route, Redirect } from 'react-router-dom';

console.log(Redirect);
console.log(reactRouter);
export default route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    >
    </Route>
);

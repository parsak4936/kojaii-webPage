import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (user) {
                    return <Component {...rest} {...props} />
                } else {
                    window.location.reload()
                  //  props.history.push("/login");
                    return <Redirect from='/admin' to={
                        {
                            pathname: '/login',
                            state: {
                                from: props.location
                            }
                        }
                    }
                    />
                }
            }
        } />
    )
}

export default ProtectedRoute;
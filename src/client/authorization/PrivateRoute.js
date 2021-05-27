import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({
    component: Component,
    isLogined,
    redirectTo,
    ...routeProps
}) =>

(<Route
    {...routeProps}
    render={props => isLogined ? <Component {...props} /> : <Redirect to={redirectTo} />}
/>)

const mapStateToProps = state => ({
    isLogined: state.auth.isLogined
})
export default connect(mapStateToProps)(PrivateRoute);
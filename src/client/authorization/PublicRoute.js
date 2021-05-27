import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({
    conponent: Component,
    isLogined,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isLogined && routeProps.restricted ?
                <Redirect to={redirectTo} /> : <Component {...props} />}
    />
)

const mapStateToProps = state => ({
    isLogined: state.auth.isLogined,
})

export default connect(mapStateToProps)(PublicRoute)
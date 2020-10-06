import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login, Products } from 'Views';
import { AppRoute } from './AppRoute.enum';
import {Layout} from "../components";

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path={AppRoute.login} component={Login} />
            <>
                <Layout>
                    <Route path={AppRoute.home} exact component={Products} />
                    <Redirect to={AppRoute.home} />
                </Layout>
            </>
        </Switch>
    );
};

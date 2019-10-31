import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { RouteObj } from './types';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

const homeRoute: RouteObj = {
    url: "/",
    component: HomePage,
};

const serviceRoute: RouteObj = {
    url: "/service",
    component: ServicePage,
};

const aboutRoute: RouteObj = {
    url: "/about",
    component: AboutUsPage,
};

const contactRoute: RouteObj = {
    url: "/contact",
    component: ContactPage,
};

const NamedRoutes = {
    home: homeRoute,
    aboutus: aboutRoute,
    service: serviceRoute,
    contact: contactRoute,
};

class AppRoutes extends React.Component {
    render(): React.ReactNode {
        return (
            <Switch>
                <Route exact path="/" component={NamedRoutes.home.component}></Route>
                <Route exact path={NamedRoutes.aboutus.url} component={NamedRoutes.aboutus.component}></Route>
                <Route exact path={NamedRoutes.service.url} component={NamedRoutes.service.component}></Route>
                <Route exact path={NamedRoutes.contact.url} component={NamedRoutes.contact.component}></Route>
            </Switch>
        );
    }
}

export { AppRoutes, NamedRoutes };
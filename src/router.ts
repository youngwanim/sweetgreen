import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

const menuComponent = () => import('./components/menu').then(({ MenuComponent }) => MenuComponent);
const orderComponent = () => import('./components/order').then(({ OrderComponent }) => OrderComponent);
// const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent);
// const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent);
// const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent);

if (process.env.ENV === 'development' && module.hot) {
  const menuModuleId = './components/menu';
  const orderModuleId = './components/order';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(menuModuleId, menuComponent,
    module.hot.accept('./components/menu', () => reload(menuModuleId, (<any>require('./components/menu')).MenuComponent)));

  makeHot(orderModuleId, orderComponent,
    module.hot.accept('./components/order', () => reload(orderModuleId, (<any>require('./components/order')).OrderComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: menuComponent,
  },
  {
    path: '/:id',
    component: orderComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });

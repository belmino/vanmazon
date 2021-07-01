import './styles/index.scss';
import './images/product-1.jpg';
import './images/product-2.jpg';
import './images/product-3.jpg';
import './images/product-4.jpg';
import './images/product-5.jpg';
import './images/product-6.jpg';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { parseRequestUrl } from './utils';
import Error404Screen from './screens/Error404Screen';
import CartScreen from './screens/CartScreen';

library.add(faStar, faStarHalfAlt, faStarRegular);
dom.watch();

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl = (request.resource ? `/${request.resource}` : '/')
  + (request.id ? '/:id' : '')
  + (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

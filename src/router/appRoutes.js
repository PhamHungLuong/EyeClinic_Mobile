import { ROUTES } from "../constants/route";

import HomeScreen from '../screens/Home';
import ProductScreen from '../screens/Product';

export default [
  {
    name: 'Home',
    text: 'Trang Chủ',
    component: HomeScreen,
    path: ROUTES.HOME,
    restricted: true,
    isPrivate: true,
    icon: 'home',
  },
  {
    name: 'Product',
    text: 'Sản phẩm',
    component: ProductScreen,
    path: ROUTES.PRODUCT,
    restricted: true,
    isPrivate: true,
    icon: 'shopping-bag',
  }
];

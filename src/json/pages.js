import { CART, CHECKOUT_DETAILS, LOGIN, REGISTER, WISHLIST } from "../config/urlPaths";


export const pages = {
  "1": {
    "path": WISHLIST,
    "name": "Wishlist",
    "component": "Wishlist"
  },
  "2": {
    "path": CART,
    "name": "Shopping Cart",
    "component": "Cart"
  },
  "3": {
    "path": CHECKOUT_DETAILS,
    "name": "Checkout",
    "component": "Checkout"
  },
  "4": {
    "path": REGISTER,
    "name": "Register",
    "component": "Register"
  },
  "5": {
    "path": LOGIN,
    "name": "Login",
    "component": "Login"
  }
};
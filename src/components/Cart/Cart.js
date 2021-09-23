import {useSelector} from "react-redux";

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items);
    debugger;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {cartItems.map((item) => (
              <CartItem
                  key={item.id}
                  item={{
                      id: item.id,
                      title:item.name,
                      quantity:item.quantity,
                      price:item.price,
                      total:item.totalPrice

                  }}
              />

          ))}

      </ul>
    </Card>
  );
};

export default Cart;
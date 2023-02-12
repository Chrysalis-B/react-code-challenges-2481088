import { useReducer } from 'react';
import { calculateTotal, getFormattedPrice, items } from './ShoppingCartHelpers';

const initialState = {
  cart: [],
  total: 0
}

function reducer(state, action) {
  const { cart } = state;
  if (action.type === 'ADD_TO_CART') {
    if (cart.find(item => item.id === action.item.id)) {
      const newCart = cart.map(item => {
        if (item.id === action.item.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        else {
          return item;
        }
      });
      const newTotal = calculateTotal(newCart);
      return {
        cart: newCart,
        total: newTotal
      }
    }
    else {
      return {
        cart: [
          ...cart,
          { ...action.item, quantity: 1 }
        ],
        total: calculateTotal([...cart, { ...action.item, quantity: 1 }])
      }
    }
  }
  if (action.type === 'DECREASE_QUANTITY') {
    const newCart = cart.reduce((acc, item, index) => {
      if (item.id === action.item.id) {
        if (item.quantity === 1) {
          return acc;
        }
        else {
          acc[index] = { ...item, quantity: item.quantity - 1 };
        }
      }
      else {
        acc.push(item);
      }
      return acc;
    }, []);
    return {
      cart: newCart,
      total: calculateTotal(newCart)
    }
  }
  if (action.type === 'INCREASE_QUANTITY') {
    const newCart = cart.map(item => {
      if (item.id === action.item.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      else {
        return item;
      }
    });
    return {
      cart: newCart,
      total: calculateTotal(newCart)
    }
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => dispatch({ type: 'ADD_TO_CART', item })}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {state.cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', item })}>-</button>
                {item.quantity}
                <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', item })}>+</button>
              </p>
              <p>Subtotal: {getFormattedPrice(item.quantity * item.price)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: {getFormattedPrice(state.total)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart;

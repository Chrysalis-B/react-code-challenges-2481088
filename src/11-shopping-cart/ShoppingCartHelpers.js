export const getFormattedPrice = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};

export const calculateTotal = (items) => items.reduce((acc, item) => acc + item.price * item.quantity, 0);

export const items = [{
  id: 1,
  name: 'apple',
  price: 0.39
}, {
  id: 2,
  name: 'banana',
  price: 0.79
}, {
  id: 3,
  name: 'cherry tomatoes',
  price: 3.99
}];
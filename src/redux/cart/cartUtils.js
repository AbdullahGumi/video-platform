export const addItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.productID === cartItemToAdd.productID
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.productID === cartItemToAdd.productID
        ? { ...cartItem, numberOfItemInCart: cartItem.numberOfItemInCart + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, numberOfItemInCart: 1}]
};

export const increaseItem = (cartItems, cartItemToIncrease) => {
  return cartItems.map(cartItem =>
    cartItem.productID === cartItemToIncrease
      ? { ...cartItem, numberOfItemInCart: cartItem.numberOfItemInCart + 1 }
      : cartItem
  );
};
  
export const decreaseItem = (cartItems, cartItemToDecrease) => {
  return cartItems.map(cartItem =>
    cartItem.productID === cartItemToDecrease
      ? { ...cartItem, numberOfItemInCart: cartItem.numberOfItemInCart - 1 }
      : cartItem
  );
};
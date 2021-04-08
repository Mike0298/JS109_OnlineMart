export const addItem = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.product_id === cartItemToAdd.product_id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.product_id === cartItemToAdd.product_id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.product_id === cartItemToRemove.product_id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.product_id !== cartItemToRemove.product_id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.product_id === cartItemToRemove.product_id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

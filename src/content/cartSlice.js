export const addItem = (planeToAdd) => {
    return {
      type: 'cart/addItem',
      payload: planeToAdd
    };
  };
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { fullType, image, price } = action.payload;
  
        const newItem = { image, price };
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [fullType]: newItem
        };
      }
      
      default: {
        return cart;
      }
    }
  };
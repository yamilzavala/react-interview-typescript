import { CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

export default function CartItems() {

  
  const cartItems = useCartSelector(state => state.cart.items)
  const dispatch = useCartDispatch()

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item))
  }

  const formattedTotalPrice = cartItems.reduce((val,item) => val + item.price * item.quantity, 0).toFixed(2)

  return (
    <div id="cart">
      {!cartItems.length && <p>No items in cart!</p>}

      {
        cartItems.length && 
        <ul id="cart-items">
            {cartItems.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;

              return (
                <li key={item.id}>
                  <div>
                    <span>{item.title}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAddToCart(item)}>+</button>
                  </div>
                </li>
              );
            })}
        </ul>
      }

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

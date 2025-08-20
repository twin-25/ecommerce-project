import { formatMoney } from "../../utils/money"
import { DeliveryOptions } from "./DeliveryOptions"
import axios from "axios"
import { useState } from "react"
export function CartItemDetails({cartItem, deliveryOptions, loadCart}) {

  const [isUpdateQuantity, setISUpdateQuantity]= useState(false);
  const[quantity, setQuantity] = useState(cartItem.quantity);
  async function updateQuantity(){
    if(isUpdateQuantity){
      axios.put(`/api/cart-items/${cartItem.productId}`,{
        quantity : Number(quantity)
      });
      await loadCart();
      setISUpdateQuantity(false)
    }
    else{
      setISUpdateQuantity(true)
    }
  }
  function updateQuantityInput(event){
    setQuantity(event.target.value)
    
  }
  function handleQuantityKeyDown(event){
    if(event.key === 'Enter'){
      setQuantity(updateQuantity)
    }
    else if(event.key === "Escape"){
      setQuantity(cartItem.quantity)
    }
  }
  const deleteCartItem = async () =>{
    await axios.delete(`/api/cart-items/${cartItem.productId}`)
    await loadCart();
  }
  return (<>
    
                  <img className="product-image"
                    src={cartItem.product.image} />
    
                  <div className="cart-item-details">
                    <div className="product-name">
                      {cartItem.product.name}
                    </div>
                    <div className="product-price">
                      {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity: {isUpdateQuantity?<input className ="update-quantity" 
                        value = {quantity} onChange={updateQuantityInput}
                        onKeyDown={handleQuantityKeyDown} type='text' style={{width: '50px'}} />:
                        <span className="quantity-label">{cartItem.quantity}</span>}
                      </span>
                      <span className="update-quantity-link link-primary"
                      onClick = {updateQuantity}>
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}>
                        Delete
                      </span>
                    </div>
                  </div>
                  <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart = {loadCart} />
                  </>
  )
}
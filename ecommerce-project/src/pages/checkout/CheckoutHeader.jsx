import { Link } from 'react-router'
import './CheckoutHeader.css'
export function CheckoutHeader({cart}) {
  const quantity = (cart) =>{
    let count = 0;
    cart.forEach((item) =>{
      count += item.quantity;
    })
    return count
  }
  return (
    <>
    <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/"> {quantity(cart)} items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  )
}
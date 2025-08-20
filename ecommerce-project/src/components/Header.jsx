import { Link } from 'react-router'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router';
import './header1.css'



export function Header({cart = []}) {
  let totalQuantity = 0;
  cart.forEach((cartItem) =>{
    totalQuantity += cartItem.quantity;
  })
  const navigate = useNavigate();
   const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const [search, setSearch] = useState(searchText || '');
  const updateSearchInput = (event)=>{
    setSearch(event.target.value);
  }

  const searchProducts = ()=>{
    navigate(`/?search=${search}`)
  }
  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo"
              src="images/logo-white.png" />
            <img className="mobile-logo"
              src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" 
          value={search}
          onChange={updateSearchInput}/>

          <button className="search-button"
          onClick = {searchProducts}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">

            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>

    </>
  )
}
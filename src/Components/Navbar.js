import React from 'react'
import '../Style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div>
  <div className="note">
    <center>
      <p className>NEW FEATURE ALERT: You can now Favourite Products, allowing faster adding to your basket on core
        lines.</p>
    </center>
  </div>
  <div className="d-flex">
    <div className="ms-3 login">
      <a href="./Register" className="mt-2 text-decoration-none text-black"><i className="bi bi-person" />REGISTER</a>
      <a href="/login" className="mt-2 me-4 text-decoration-none text-black">&nbsp;|<i className="bi bi-person" />LOGIN</a>
    </div>
    <div className>
      <img src="https://linkwwwebsite.000webhostapp.com/FinalLogo1.png" alt className="logo" />
    </div>
    <div className="phone">
      <p><i className="bi bi-telephone" />0208 805 5756</p>
    </div>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." /><i className="bi bi-search" />
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link ms-5 text-white " aria-current="page" href="/">HOME</a>
          <Link className="nav-link ms-5 text-white" to="/deparments">DEPARTMENTS</Link>
          <Link className="nav-link ms-5 text-white" to="/Supersunday">SUPER SUNDAY OFFERS</Link>
          <Link className="nav-link ms-5 text-white" to="/Palletdeals">PALLETS DEALS</Link>
          <Link className="nav-link ms-5 text-white" to="/Shopbybrand">SHOP BY BRAND</Link>
          <Link className="nav-link ms-5 text-white" to="/Newarrivals">NEW ARRIVALS</Link>
        </div>
      </div>
    </div>
  </nav>
  <div className="d-flex freedd">
    <div className="d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/d111f8175d1341dc869b9e957676bdfb.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none text "> FREE UK DELIVERY AVAILABLE
        </a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/491b00b8e0974e549fb58b25678df23a.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1 ">
        <a href className="text-decoration-none"> EXPORT &amp; FMCG SALES INFO</a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/df15fb3cb3c44772b63088dd8b72acea.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none">AMAZON &amp; EBAY SELLER GUIDE</a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/2b8af9cd62a84861b239107437c01880.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none "> HELP / FAQ</a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { CartProvider, useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";
export default function Navbar() {
    
    const [cartView, setCartView] = useState(false)
    let data = useCart();
    const navigate=useNavigate();

    const handleLogOut=()=>{
        localStorage.removeItem("authToken");
        navigate('/login')
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-1" to="/">
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item ">
              <Link className="nav-link active fs-5" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>

            </li>
            {
                (localStorage.getItem("authToken"))?
                <li className="nav-item ">
              <Link className="nav-link active fs-5" to="/">
                My Orders <span className="sr-only">(current)</span>
              </Link>

            </li>:""
            }
          </ul>
            {
                (!localStorage.getItem("authToken"))?

          <div className="d-flex">
            <Link className="btn bg-white text-success mx-2" to="/login">
              Login
            </Link>
            <Link className="btn bg-white text-success mx-2" to="/signup">
              SignUp
            </Link>
          </div>
          :
          <div>

          <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)}}>
            My cart{" "}
            <Badge pill bg="danger">{data.length}</Badge>
          </div>
          {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart /></Modal>:null}
          <div className="btn bg-white text-danger mx-2" onClick={handleLogOut}>
            Log out
          </div>
          </div>
            }
        </div>
      </nav>
    </div>
  );
}

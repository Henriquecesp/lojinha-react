import React from "react";
import { NavLink } from "react-router-dom";

const CartTotals = ({ value }) => {
  const {cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-white'>
            <NavLink to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                Limpar Carrinho
              </button>
            </NavLink>
            <h5>
              <span className='text-title'>Total : </span>
              <strong>R$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;

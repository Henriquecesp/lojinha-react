import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonContinue } from "../ButtonscartComponent";

const CartTotals = ({ value }) => {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-white mb-3'>
            <NavLink to='/'>
              <button
                className='btn btn-outline-danger text-uppercase m-1 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                Limpar Carrinho
              </button>
              <ButtonContinue />
            </NavLink>
            <h5 className='pt-5'>
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

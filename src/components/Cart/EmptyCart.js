import React from "react";
import Title from '../Title'

const EmptyCart = () => {
  return (
    <div className='pt-1'>
    <Title name='Carrinho vazio' title='volte e continue comprando' />
    <div className='empty-cart' />
  </div>
  );
};

export default EmptyCart;

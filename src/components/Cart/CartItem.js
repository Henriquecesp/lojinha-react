import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className='row my-2 text-capitalize text-center text-white'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ widht: "10rem", height: "10rem" }}
          alt='imagem produto'
          className='img-fluid'
        />
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Produto : </span>
        {title}
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Preço : </span>R${price}
      </div>

      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              className='btn btn-primary mx-1'
              onClick={() => decrement(id)}
            >
              -
            </span>
            <span className='btn btn-primary mx-1'>{count}</span>
            <span
              className='btn btn-primary mx-1'
              onClick={() => increment(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <div className='btn btn-primary mx-1' onClick={() => removeItem(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <strong>
          {" "}
          {price} X {count} :{" "}
        </strong>
        R${total}
      </div>
    </div>
  );
};

export default CartItem;

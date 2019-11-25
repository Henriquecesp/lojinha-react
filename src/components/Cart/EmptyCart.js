import React from 'react';

const EmptyCart = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="empty-position col-10 mx-auto text-center text-title text-white">
                    <h1>Seu carrinho esta vazio.</h1>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;

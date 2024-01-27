import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="Product" />
      <p className='item-name'>{props.name}</p>
      <div className='item-prices'>
        <div className="item-price-new">
          Special Price: ${props.new_price}
        </div>
        <div className="item-price-old">
          Regular Price: ${props.old_price}
        </div>
      </div>
      <p className='item-description'>
        Elevate your style with this trendy item! Limited stock. Shop now!
      </p>
      <button className='item-btn'>Add to Cart</button>
    </div>
  );
}

export default Item;



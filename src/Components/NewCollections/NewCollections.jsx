import React from 'react';
import './NewCollections.css';
import Item from './Item'; // Assuming 'Item' is in the same directory

const NewCollections = () => {
  const new_collections = [
    // ... your data here
  ];

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {new_collections.map((item, i) => (
          // Return the JSX element from the map function
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;


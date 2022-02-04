import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ShelfPage() {

  const dispatch = useDispatch();
  const item = useSelector(store => store.item);

  useEffect(() => {
    // dispatch to fetch all items
    dispatch({ type: 'FETCH_ITEMS' });

  }, [])





  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {
        item.map(itemName => (<div key={itemName.id}>
          <p>{itemName.description}</p>
          <img src={itemName.image_url} />
        </div>))
      }
    </div>
  );
}

export default ShelfPage;

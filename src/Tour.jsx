import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h5 className='tour-price'>${price}</h5>
        </div>
        <p>{readMore 
        ? info
        : `${info.substring(0,200)}...`}<button onClick={() => setReadMore(!readMore)}><small>{readMore ? 'Show Less' : 'Read More' }</small></button></p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
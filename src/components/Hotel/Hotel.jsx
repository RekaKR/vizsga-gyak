import React, { useState } from 'react';
import Subscription from '../Subscription/Subscription';

function Hotel(props) {
  const [showMore, setShowMore] = useState(true);
  const [showButton, setShowButton] = useState(true);

  return (
    <div>
      <h3>{props.item.name}</h3>

      <button onClick={() => setShowMore(state => !state)}>
        {showMore ? "Show more" : "Show less"}
      </button>

      {
        showMore && <>
          <p>{props.item.city} ({props.item.stars})</p>
          <button onClick={() => setShowButton(state => !state)}>Request more info</button>

          {
            showButton
              ? ""
              : <Subscription setShowButton={setShowButton} item={props.item} />
          }
        </>
      }
    </div>
  )
}

export default Hotel

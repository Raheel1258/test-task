import React from 'react';
import './styles.css';

const Card = ({ comment }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img alt="" className="card-img" src={comment.image} />
      </div>
      <div>
        {comment.comment}
      </div>
    </div>
  )
}

export default Card;
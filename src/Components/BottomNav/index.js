import React from 'react';
import { Link } from 'react-router-dom';
import { BiCamera, BiPlus } from 'react-icons/bi';

import './styles.css';

const BottomNav = ({ component, handleFile }) => {
  return (
    <div className="bottom-bar__container">
      {component === 'capture' ?
        <div className="file-upload">
          <div className="bottom-bar__action">
            <BiCamera color="white" />
          </div>
          <input onChange={handleFile} accept="image/x-png,image/gif,image/jpeg" type="file" />
        </div>
        :
        <Link to="/capture" className="bottom-bar__action">
          <BiPlus color="white" />
        </Link>
      }
    </div>
  )
}

export default BottomNav;
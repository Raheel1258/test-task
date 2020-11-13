import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowLeftShort } from 'react-icons/bs';
import {Link} from 'react-router-dom';

import './styles.css';

const Navbar = ({ component }) => {
  return (
    <div className="nav-bar__container">

      {component ?
        <Link to='/' className="nav-bar__menu-icon">
          <BsArrowLeftShort color='white' />
        </Link>
        :
        <>
          <div className="nav-bar__heading">
            Insta-grab
          </div>
          <div className="nav-bar__menu-icon">
            <FaBars color='white' />
          </div>
        </>
      }

    </div>
  )
}

export default Navbar;
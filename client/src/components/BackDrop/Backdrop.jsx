import './Backdrop.css';

import React from 'react';

function Backdrop(props) {
  return <div className='Backdrop'>
      {props.children}
  </div>;
}

export default Backdrop;

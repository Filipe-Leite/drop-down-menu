import React, { useRef, useState } from 'react';
import './styles.css';
import MenuIcon from './assets/manoel-gomes-caneta-azul.jpeg'
import { useOutsideClick } from './useOutsideClick';

function App() {
  const dropDownRef = useRef(null);
  const [isActive,setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  console.log(isActive)

  return (
    <div className="Container">
      <div className='menu-container'>
        <button onClick={onClick} className='menu-button'>
          <img src={MenuIcon} alt="menu-icon" className='menu-icon'/>
          <span>Menu</span>
        </button>

        <nav ref={dropDownRef} className={`menu ${isActive ? 'active' : 'inactive' }`}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>DashBoard</a>
            </li>
            <li>
              <a href='#'>User</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;

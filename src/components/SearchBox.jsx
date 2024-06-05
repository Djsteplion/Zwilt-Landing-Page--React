import React from 'react';
import searcharrow from '../images/Frame 626624.png';

const SearchBox = () => {
  return (
    <div>
      <div className="searchComponent">
        <div className="searchBox">
            <input type="text"  placeholder="Looking for" className="searchBx" />
            <img src={searcharrow} className="searchArrow" alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default SearchBox
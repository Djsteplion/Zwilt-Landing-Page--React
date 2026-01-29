import React from 'react'

const SlantSectionDivider = () => {
  return (
    <div style={{ lineHeight: 0, width: '100%' }}>
        <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
        >
        <path 
            d="M0 120L1440 120V0C1440 0 1080 120 720 120C360 120 0 0 0 0V120Z" 
            fill="#F3F3F3" /* Match the Marketplace background color */
        />
        </svg>   
    </div>
  )
}

export default SlantSectionDivider
import React from 'react'

function Container({children}) {
  return (
    <div className='px-4 container-fluid w-auto'>
{children}
    </div>
  )
}

export default Container
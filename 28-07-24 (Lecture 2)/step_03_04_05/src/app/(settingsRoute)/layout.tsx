import React from 'react'

function layout({children,}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div className='bg-orange-400'>
            Setting Layout
        </div>
      {children}
    </div>
  )
}

export default layout

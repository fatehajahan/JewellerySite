import React from 'react'

const Container = ({ children }) => {
    return (
        <div style={{width:"1230px"}} className='max-w-[1230] mx-auto p-4'>{children}</div>
    )
}

export default Container
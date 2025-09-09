import React from 'react'

const Container = ({ children }) => {
    return (
        <div  className='md:max-w-[1230] md:w-[1230px] mx-auto p-4'>{children}</div>
    )
}

export default Container
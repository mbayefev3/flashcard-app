import React from 'react'

const FlipButton =({flip, handleFilp, handleNext,next}) =>{

    return (
        <>
         <button className="btn btn-primary" onClick={handleFilp}>Flip</button>
        {flip==='front' && next===0 ? '' :    <button style={{marginLeft:"10px"}}
        onClick={handleNext}
         className="btn btn-primary">Next</button>}
        </>
    )
}

export default FlipButton
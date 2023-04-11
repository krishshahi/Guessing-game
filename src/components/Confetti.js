import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
const ShowConfetti = () => {
    const [windowDimesion, setWindowDimenstion] = useState({ width: window.innerWidth, height: window.innerHeight })
    const detectSize = () => {
        setWindowDimenstion({
            width: window.innerWidth, height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimesion])
    return (
        <>
            <ReactConfetti width={windowDimesion.width} height={windowDimesion.height} />
        </>
    )
}

export default ShowConfetti
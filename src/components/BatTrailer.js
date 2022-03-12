import React from 'react'

const BatTrailer = ({handleToggle}) => {
    return (
        <div className='trailer-cover'>
            <button
                className='bat-button home-button'
                onClick={handleToggle}
            >
                Get your Batsignal
            </button>
            <iframe className="trailer" width="560" height="315" src="https://www.youtube.com/embed/3X2ddbAbkQE?autoplay=1&mute=1&start=3&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default BatTrailer
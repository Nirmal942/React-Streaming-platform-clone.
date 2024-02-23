import React from 'react'

const Row = ({ title, isLargeRow }) => {
    return (
        <div className='row'>
            <h1>
                {title}
            </h1>
            <div className='row_posters'>
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />
                <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' className={'rowposter ${isLargeRow && "largeImage"}'} />

            </div>
        </div>
    )
}

export default Row
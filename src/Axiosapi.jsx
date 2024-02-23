import axios from 'axios'
import React, { useEffect, useState } from 'react'





const Axiosapi = () => {

    const [userData, setUserData] = useState([]);

    // const getmovies = () => {

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=74ca64f6bd9df09edfa7a0697f89cd14")
            .then((response) => {
                console.log(response)

                setUserData(response.userData)
                // setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            })

    }, [])




    //  }

    return (
        <div>Axiosapi

            {/* {movie?.title || movie?.original_name ||movie?.name} */}
            {/* {userData.map((data) => {

                return <div>{data.results[0]}

                </div>
            })} */}

        </div>
    )
}

export default Axiosapi
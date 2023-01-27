import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Trending = () => {
    const [content, setContent]=useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
       // console.log(data)
        setContent(data.results)
        //destructuring everything out of return o the promise - data
    }
    useEffect(() => {
       fetchTrending()
    }, [])
    return ( 
        <div>
            <span className='pageTitle'></span>
            <div className='trending'>
                {content && content.map((c)=> {
                    console.log(c)
                })}
            </div>
        </div>
    )
}

export default Trending

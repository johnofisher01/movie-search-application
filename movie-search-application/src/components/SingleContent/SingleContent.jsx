import { AlertTitle } from '@mui/material'
import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import { Badge } from '@mui/material'


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div className='media'>
      <Badge className={{zIndex:'2'}}badgeContent={vote_average} color={vote_average > 6 ? 'primary': 'secondary'}/>
      <img className='poster' src={poster? `${img_300}${poster}` : unavailable} alt={title}  />
      <b className='title'>{title}</b>
      <span className='subTitle'>{media_type === "tv" ? "Tv Series" : "Movie" }
      <span className='subTitle'>{date}</span>
      </span>
    </div> 
  )
}

export default SingleContent


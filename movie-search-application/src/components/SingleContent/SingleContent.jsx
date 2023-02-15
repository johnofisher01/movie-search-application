import React from 'react'
import { img_300 } from '../../config/config'
import { unavailable } from '../../config/config'

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div>
      <img src={poster? `${img_300}${poster}` : unavailable}  />
    </div> 
  )
}

export default SingleContent


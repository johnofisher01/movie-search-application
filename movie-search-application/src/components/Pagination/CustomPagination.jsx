import { Pagination } from '@mui/material'
import React from 'react'
import { useScrollTo } from "react-use-window-scroll";


const CustomPagination = () => {

  const scrollTo = useScrollTo();
  const handlePageChange = ({page})=> {
      setPage(page);
      scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <div>
      <Pagination  onChange/>
    </div>
  )
}

export default CustomPagination

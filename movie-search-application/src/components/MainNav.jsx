import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const SimpleBottomNavigation =() => {
  const [value, setValue] = React.useState(0);
const navigate = useNavigate()// history is part of react router dom
      useEffect(() => {
        if (value === 0) navigate("/");
        else if (value === 1) navigate("/movies");
        else if (value === 2) navigate("/series");
        else if (value === 3) navigate("/search");
      }, [value, navigate])

  return (
    <Box sx={{ zIndex:'2',width: '100%', position:'fixed',bottom:0,backgroundColour:'#2d313a' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction style={{color:"black"}} label="Trending" icon={<TrendingUpIcon />} />
        <BottomNavigationAction style={{color:"black"}} label="Movies" icon={<TheatersIcon />} />
        <BottomNavigationAction style={{color:"black"}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"black"}} label="Search" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation;
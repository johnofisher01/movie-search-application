import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';

const SimpleBottomNavigation =() => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 1, position:'fixed',bottom:0,backgroundColour:'#2d313a' }}>
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
        <BottomNavigationAction style={{color:"black"}} label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation;
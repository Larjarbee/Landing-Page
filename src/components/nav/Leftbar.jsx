import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Leftbar = () => {
  return (
    <aside className='fixed h-full bg-primary hidden  md:block'>
      <Link to='/' className='flex gap-3 p-5 hover:bg-green-500 ...'>
        <Tooltip title='HOME' placement='right'>
          <HomeOutlinedIcon />
        </Tooltip>
      </Link>
      <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
        <Tooltip title='MOVIE' placement='right'>
          <SlideshowOutlinedIcon />
        </Tooltip>
      </div>
      <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
        <Tooltip title='TV SERIES' placement='right'>
          <LiveTvOutlinedIcon />
        </Tooltip>
      </div>
      <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
        <Tooltip title='REMAINDER' placement='right'>
          <CalendarMonthOutlinedIcon />
        </Tooltip>
      </div>
      <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
        <Tooltip title='LOGOUT' placement='right'>
          <LogoutOutlinedIcon />
        </Tooltip>
      </div>
    </aside>
  );
};

export default Leftbar;
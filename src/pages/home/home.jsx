import React from 'react';
import HeroBanner from './heroBanner/heroBanner';
import './home.scss';
import Popular from './popular/popular';
import TopRated from './topRated/topRated';
import Trending from './trending/trending';

const Home = () => {
  return (
    <div className='homepage'>
        <HeroBanner/> 
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home
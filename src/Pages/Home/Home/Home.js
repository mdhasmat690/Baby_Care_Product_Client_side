import React from 'react';
import Review from '../../../Review/Review';
import Products from '../../Services/Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Review></Review>
            
        </div>
    );
};

export default Home;
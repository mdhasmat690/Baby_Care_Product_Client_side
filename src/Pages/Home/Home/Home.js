import React from 'react';
import Review from '../../../Review/Review';
import ImgGalery from '../../ImgGalery/ImgGalery';
import Products from '../../Services/Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Review></Review>
            <ImgGalery></ImgGalery>
            
        </div>
    );
};

export default Home;
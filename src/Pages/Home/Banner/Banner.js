import React from 'react';
import './Banner.css'
import BannerImg from '../../images/bannerbackground.png'
const Banner = () => {
    return (
        <div className='banner-header' style={{backgroundImage: `url(${BannerImg})`}}>
            <div className="search-field">
                <h1 className='search-title'>Best Food Waiting for your belly</h1>
                <form className='form-part'>
                    <input className='input-field' type="text"  placeholder='Search Your Food'/> <span className='search-btn'>Search</span>
                </form>
            </div>
        </div>
    );
};

export default Banner;
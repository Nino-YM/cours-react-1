import React from 'react';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../Nav/Nav';


const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Nav></Nav>
            <div>{navigation.state === 'loading' && 'loading....' }</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
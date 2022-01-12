import React from 'react';
import Banner from '../../Banner/Banner';
import Card from '../../Product/Card';
import Footer from '../../Shared/Footer/Footer';
import ExtraSec from '../ExtraSec/ExtraSec';

const Home = () => {
    return (
        <div style={{ backgorundColor: "black" }}>
            <Banner></Banner>

            <Card></Card>
            <ExtraSec></ExtraSec>

            <Footer></Footer>
        </div >
    );
};

export default Home;
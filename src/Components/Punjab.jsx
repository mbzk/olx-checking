import React from 'react';
import '../App.css';
import NavbarB from './AllCategories';
import LastSearch from './CardsSection';
import Footer, { FooterTwo } from './Footer';
import FreshRecommendations from './FreshRecommendation';
import Header from './Header';
import JumboImg from './HeroImage';
import LastAD from './LastAd';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import ProvinceCardsShow from './ProvinceCardData';

class Punjab extends React.Component{
    render(){
        return(
            <div >
                <Header />
                <NavbarB/>
                <JumboImg/>
                <LastSearch/>
                <ProvinceCardsShow/>
                <LastAD/>
                <Footer/>
                <FooterTwo/>
            </div>
        )
    }
}

export default Punjab;
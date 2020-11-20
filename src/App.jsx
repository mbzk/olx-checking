import React from 'react';
import './App.css';
import NavbarB from '../src/Components/AllCategories';
import LastSearch from './Components/CardsSection';
import Footer, { FooterTwo } from './Components/Footer';
// import FreshRecommendation from './Components/FreshRecommendation';
import Header from './Components/Header';
import JumboImg from './Components/HeroImage';
import LastAD from './Components/LastAd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Punjab from './Components/Punjab';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/UserSlice'
import { auth } from './Config/firebase';
import { logout } from "./features/UserSlice"
import { useEffect } from "react";
import AppAfterLogin from '../src/Components/AppAfterLogin';
import SellForm from './Components/SellForm';




function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log("Auth user is => ",authUser)
            if (authUser) {
                // login in user
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,


                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch]);

    return <div className="App">
        {user ? (
            <>

                <Switch>
                    <Route exact path="/" component={AppAfterLogin} />
                    <Route exact path="/sellform" component={SellForm} />
                </Switch>


            </>
        ) :
            (
                <>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/punjab" component={Punjab} />
                    </Switch>
                </>
            )}
    </div>
}

export default App;

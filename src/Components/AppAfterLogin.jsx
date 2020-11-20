import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { selectUser } from '../features/UserSlice';
import './AppAfterLogin.css';
import Avatar from '@material-ui/core/Avatar';
import Selector from './AutoComplete';
import Searchbar from './SearchBar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import OlxSellbutton from "../Images/olxSellButton.png";
import Footer, { FooterTwo } from './Footer';
import LastAD from './LastAd';
import FreshRecommendations from './FreshRecommendation';
import LastSearch from './CardsSection';
import JumboImg from './HeroImage';
import NavbarB from './AllCategories';
import {login , logout} from '../features/UserSlice';
import {auth} from '../Config/firebase';
import configureStore from '../Store/Action/index'
import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RecAfterLogin from "./RecAfterLogin";



export default class AppAfterLogin extends React.Component{
    render(){
        return(
            <div className="afterLoginDiv">
                <HeaderAfterLogin/>
                <NavbarB/>
                <JumboImg/>
                <LastSearch/>
                <RecAfterLogin/>
                <LastAD/>
                <Footer/>
                <FooterTwo/>
            </div>
        )
    }
}



function HeaderAfterLogin(){
    const user =  useSelector(selectUser);
    const dispatch = useDispatch();
    // console.log("User is =>")

    

    

    return <>
        <div className="mainHeaderAfterLogin">
                    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        </a>
        <Selector />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbarSearchmainDiv" id="navbarNav">
          
           <Searchbar/><button className="Searchbtn"><SearchOutlinedIcon/></button> &nbsp; <Avatar   src={user.photo}   /> &nbsp; <abbr title="Logout here"> <ExitToAppIcon onClick={()=>{auth.signOut()}} /></abbr><div className="BtnsDiv">  <div className="SellBtn">
               <Link to="/sellform"> <img src={OlxSellbutton} alt="sell" width="110px" height="50px"/></Link>
                </div></div>
        </div>
      </nav>
            </div>
    </>
}
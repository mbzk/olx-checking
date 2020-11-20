import React from 'react';
import '../App.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowDownIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';




  export default class Selector extends React.Component{
      render(){
          return(
              <div className="SelectorDiv">
                  <SearchIcon/>
                  <select className="custom-select" >
                      <option value="0">Pakistan</option>
                      <option value="1"> Punjab</option>
                      <option value="2">Islamabad Capital Territory</option>
                      <option value="3">Sindh</option>
                      <option value="4">Kheybar Pakhtunkhwa</option>
                  </select>
                  <KeyboardArrowDownIcon/>
              </div>
          )
      }
  }
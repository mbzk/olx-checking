import React from 'react';
import "../App.css";
import KeyboardArrowDownIcon from '@material-ui/icons/ExpandMore';
import Dropdown from 'react-bootstrap/Dropdown'


export default class NavbarB extends React.Component{
  render(){
    return(
      <div className="bottom-nav">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ALL CATEGORIES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Vehicle</Dropdown.Item>
              <ul>
                <li>
                  Cars
                </li>
                <li>
                  Tractors
                </li>
                <li>
                  Boats
                </li>
                <li>
                  Rickshaw and chingchi
                </li>
                <li>
                  Other vehicles
                </li>
                <li>
                  Bikes
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Animals</Dropdown.Item>
              <ul>
              <li>
                  Cats
                </li>
                <li>
                  Dogs
                </li>
                <li>
                  Parrots
                </li>
                <li>
                  horses
                </li>
                <li>
                  Birds
                </li>
                <li>
                  hens
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Fashion And Beauty</Dropdown.Item>
              <ul>
              <li>
                  Wedding
                </li>
                <li>
                  Watches
                </li>
                <li>
                  Clothes
                </li>
                <li>
                  Make Up
                </li>
                <li>
                  Jewellery
                </li>
                <li>
                  Accesories
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Mobiles</Dropdown.Item>
              <ul>
              <li>
                  Mobile Phones
                </li>
                <li>
                  Accessories
                </li>
                <li>
                  Tablets
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Furnecoration</Dropdown.Item>
              <ul>
              <li>
                  Office Household items
                </li>
                <li>
                  Office Furniture
                </li>
                <li>
                  Curtains And Blinds
                </li>
                <li>
                  Rugs And Carpets
                </li>
                <li>
                  Painting And Mirrors
                </li>
                <li>
                  Garden and Outdoor
                </li>
              </ul>
            </div>
            <div className="dropdown-item-cont">
              <Dropdown.Item href="#">Jobs</Dropdown.Item>
              <ul>
              <li>
                  Other Jobs
                </li>
                <li>
                  Part-time
                </li>
                <li>
                  Domestic Staff
                </li>
                <li>
                  Medical
                </li>
                <li>
                  Manufacturing
                </li>
                <li>
                  Human Resources
                </li>
              </ul>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <div className="popular-categories">
          <ul>
            <li>Mobile Phones</li>
            <li>Cars</li>
            <li>Motorcycles</li>
            <li>House</li>
            <li>TV-Video</li>
            <li>Tablets</li>
            <li>Land And Plots</li>
          </ul>
        </div>
      </div>
    )
  }
}

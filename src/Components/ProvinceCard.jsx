import React from 'react';
import '../App.css';
import Cards from './Cards';
import ProvinceData from './ProvinceData';

export default class ProvinceCardsShow extends React.Component{
    render(){
        return(
            <div className="FreshRecommendDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="FreshrecHeading">Fresh Recommendations</h1>
                        </div>
                    </div>
                    <div className="row">
                    {
                     ProvinceData.map((value,index)=>{
                         return <div className="col-md-3"><Cards
                         key={index}
                         price = {value.price}
                         title = {value.title}
                         place = {value.place}
                         imgsrc = {value.imgsrc}
                         /></div>
                     })
                 }
                    </div>

                </div>
                <div className="container ">
                   
            <div className="buttonLoad ml-5 my-3">
                <button onClick={this.Extra_row} className="loadMore"  >Load More</button>
            </div> </div>
        
           <div className="ShowAlertDiv">
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Sorry!</strong> More Items are Not Avaialble right Now...
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
    
           </div>
            </div>
            </div>
        )
    }
}

  // file: src/components/VehicleInput.js
  import React, { Component } from 'react';
  import Button from './Button'
  
  class CloseBidding extends Component {
    state = {
      $class: '',
      listing: '',
     
    }
    handleChange = (e) => {
        
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  
    _onSubmit = (e)=>{
       e.preventDefault();
        this.setState ({
          $class:this.state.$class,
          listing:this.state.listing ,
         
          
          
        });
  
        const data = {
  
          $class:"org.acme.vehicle.auction.CloseBidding",
          listing:"org.acme.vehicle.auction.VehicleListing#"+this.state.listing ,
          
          
        }
        fetch('http://13.124.6.135:3000/api/CloseBidding' ,{
          method :'POST',
          headers : {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          },
          body:JSON.stringify(data)
      })
      //   console.log(this.state.$class);
      //   console.log(this.state.bidPrice);
      //   console.log('resource:org.acme.vehicle.auction.Vehicle#'+this.state.vehicle);
        
    }
    
    getCloseBidding = ()=>{
      fetch('http://13.124.6.135:3000/api/CloseBidding')
      .then(res=>res.json())
      .then(resData =>{
         
          console.log(resData)})
    }
    render() {
      return (
          <div>
          <p> 경매 마감 </p>
        <form onSubmit={this._onSubmit}>
          <input
            placeholder="org.acme.vehicle.auction.CloseBidding"
            value={"org.acme.vehicle.auction.CloseBidding"}
            onChange={this.handleChange}
            name="$class"
          />
          <input
            placeholder="listing"
            value={this.state.listing}
            onChange={this.handleChange}
            name="listing"
          />
          
          <div>{this.state.$class} {this.state.vin} {this.state.owner}</div>
          <Button title ="경매 마감 "></Button>
          
        </form>
        <Button title ="경매 마감 조회 " action = {()=>this.getCloseBidding()} ></Button>
        </div>
      );
    }
  }
  
  export default CloseBidding;
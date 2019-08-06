
  // file: src/components/VehicleInput.js
import React, { Component } from 'react';
import Button from './Button'

class OfferInput extends Component {
  state = {
    $class: '',
    bidPrice: '',
    listing:'',
    member:''
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
        bidPrice: this.state.bidPrice,
        listing:this.state.listing ,
        member:this.state.member
        
        
      });

      const data = {

        $class:"org.acme.vehicle.auction.Offer",
        bidPrice: this.state.bidPrice,
        listing:"org.acme.vehicle.auction.VehicleListing#"+this.state.listing ,
        member:"resource:org.acme.vehicle.auction.Member#"+this.state.member
        
      }
      fetch('http://13.124.6.135:3000/api/Offer' ,{
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
  
  getVehicle = ()=>{
    fetch('http://13.124.6.135:3000/api/Offer')
    .then(res=>res.json())
    .then(resData =>{
       
        console.log(resData)})
  }
  render() {
    return (
        <div>
        <p> 경매리스트 추가 </p>
      <form onSubmit={this._onSubmit}>
        <input
          placeholder="org.acme.vehicle.auction.Offer"
          value={"org.acme.vehicle.auction.Offer"}
          onChange={this.handleChange}
          name="$class"
        />
        <input
          placeholder="bidPrice"
          value={this.state.bidPrice}
          onChange={this.handleChange}
          name="bidPrice"
        />
        <input
          placeholder="listing"
          value={this.state.listing}
          onChange={this.handleChange}
          name="listing"
        />
        <input
          placeholder="member"
          value={this.state.member}
          onChange={this.handleChange}
          name="member"
        />
       
        <div>{this.state.$class} {this.state.vin} {this.state.owner}</div>
        <Button title ="비딩 추가 "></Button>
        
      </form>
      <Button title ="비딩  조회 " action = {()=>this.getVehicle()} ></Button>
      </div>
    );
  }
}

export default OfferInput;
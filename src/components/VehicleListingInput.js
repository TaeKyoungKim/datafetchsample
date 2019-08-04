

  // file: src/components/VehicleInput.js
import React, { Component } from 'react';
import Button from './Button'

class MemberInput extends Component {
  state = {
    $class: '',
    listingId: '',
    reservePrice:'',
    description:'',
    state:'FOR_SALE',
    vehicle:''

    
    
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
        listingId: this.state.listingId,
        reservePrice:this.state.reservePrice ,
        description:this.state.description,
        state:'FOR_SALE',
        vehicle:this.state.vehicle
        
      });

      const data = {
        $class:this.state.$class,
        listingId: this.state.listingId,
        reservePrice:this.state.reservePrice ,
        description:this.state.description,
        state:'FOR_SALE',
        vehicle:'resource:org.acme.vehicle.auction.Vehicle#'+this.state.vehicle
      }
      fetch('http://localhost:3000/api/VehicleListing' ,{
        method :'POST',
        headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body:JSON.stringify(data)
    })
      console.log(this.state.$class);
      console.log(this.state.vin);
      console.log('resource:org.acme.vehicle.auction.Vehicle#'+this.state.vehicle);
      
  }
  
  getVehicle = ()=>{
    fetch('http://localhost:3000/api/VehicleListing')
    .then(res=>res.json())
    .then(resData =>{
       
        console.log(resData)})
  }
  render() {
    return (
        <div>
        <p> 자동차 추가 </p>
      <form onSubmit={this._onSubmit}>
        <input
          placeholder="org.acme.vehicle.auction.VehicleListing"
          value={this.state.$class}
          onChange={this.handleChange}
          name="$class"
        />
        <input
          placeholder="listingId"
          value={this.state.listingId}
          onChange={this.handleChange}
          name="listingId"
        />
        <input
          placeholder="reservePrice"
          value={this.state.reservePrice}
          onChange={this.handleChange}
          name="reservePrice"
        />
        <input
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />

<input
          placeholder="FOR_SALE"
          value={this.state.state}
          onChange="FOR_SALE"
          name="state"
        />
        <input
          placeholder="vehicle"
          value={this.state.vehicle}
          onChange={this.handleChange}
          name="vehicle"
        />
       
        <div>{this.state.$class} {this.state.vin} {this.state.owner}</div>
        <Button title ="경매 추가 "></Button>
        
      </form>
      <Button title ="경매 조회 " action = {()=>this.getVehicle()} ></Button>
      </div>
    );
  }
}

export default MemberInput;
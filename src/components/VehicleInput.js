
  // file: src/components/VehicleInput.js
import React, { Component } from 'react';
import Button from './Button'

class MemberInput extends Component {
  state = {
    $class: '',
    vin: '',
    owner:''
    
    
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
        vin: this.state.vin,
        owner:this.state.owner
        
      });

      const data = {
        $class:this.state.$class,
        vin: this.state.vin,
        owner:'resource:org.acme.vehicle.auction.Member#'+this.state.owner
      }
      fetch('http://localhost:3000/api/Vehicle' ,{
        method :'POST',
        headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body:JSON.stringify(data)
    })
      console.log(this.state.$class);
      console.log(this.state.vin);
      console.log('resource:org.acme.vehicle.auction.Member#'+this.state.owner);
      
  }
  
  getVehicle = ()=>{
    fetch('http://localhost:3000/api/Vehicle')
    .then(res=>res.json())
    .then(resData =>{console.log(resData)})
  }
  render() {
    return (
        <div>
        <p> 자동차 추가 </p>
      <form onSubmit={this._onSubmit}>
        <input
          placeholder="org.acme.vehicle.auction.Vehicle"
          value={this.state.$class}
          onChange={this.handleChange}
          name="$class"
        />
        <input
          placeholder="vin"
          value={this.state.vin}
          onChange={this.handleChange}
          name="vin"
        />
        <input
          placeholder="owner"
          value={this.state.owner}
          onChange={this.handleChange}
          name="owner"
        />
       
        <div>{this.state.$class} {this.state.vin} {this.state.owner}</div>
        <Button title ="자동차 추가 "></Button>
      </form>
      <Button title ="자동차 조회 " action = {()=>this.getVehicle()} ></Button>
      </div>
    );
  }
}

export default MemberInput;
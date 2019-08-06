// file: src/components/MemberInput.js
import React, { Component } from 'react';
import Button from './Button'

class MemberInput extends Component {
  state = {
    $class: '',
    balance: '',
    email:'',
    firstName:'',
    lastName :''
    
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
        balance: this.state.balance,
        email:this.state.email,
        firstName:this.state.firstName,
        lastName :this.state.lastName
      });
      const data = {
        $class:this.state.$class,
        balance: this.state.balance,
        email:this.state.email,
        firstName:this.state.firstName,
        lastName :this.state.lastName
      }
      fetch('http://13.124.6.135:3000/api/Member' ,{
        method :'POST',
        headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body:JSON.stringify(data)
    })
    
  }
  
 getMember = ()=>{
   fetch('http://13.124.6.135:3000/api/Member')
   .then(res=>res.json())
   .then(resData =>{console.log(resData)})
 }
  render() {
    return (
        <div>
        <p> 맴버 추가 </p>
      <form onSubmit={this._onSubmit}>
        <input
          placeholder="$class"
          value={"org.acme.vehicle.auction.Member"}
          onChange={this.handleChange}
          name="$class"
        />
        <input
          placeholder="balance"
          value={this.state.balance}
          onChange={this.handleChange}
          name="balance"
        />
        <input
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />
        <input
          placeholder="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          name="firstName" 
        />
        <input
          placeholder="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          name="lastName"
        />
        <div>{this.state.name} {this.state.phone}</div>
        <Button title ="맴버추가 "></Button>
      </form>

      <Button title ="맴버조회 " action = {()=>this.getMember()} ></Button>
      </div>
    );
  }
}

export default MemberInput;
import React from 'react';
import './App.css';


// import MemberData from './MemberData'
import MemberInput from './components/MemberInput'
import VehicleInput from './components/VehicleInput'
import VehicleListingInput from './components/VehicleListingInput'
import OfferInput from './components/OfferInput'
import CloseBidding from './components/CloseBidding'
function App() {
  return (
    <div className="App">
     
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
      <MemberInput />
      <VehicleInput />
      <VehicleListingInput />
      <OfferInput />
      <CloseBidding />
    </div>
  );
}

export default App;

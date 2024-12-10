//import logo from '../logo.svg';
import React from 'react';
import './App.css';
import Bits from '../bits/Bits';

class App extends React.Component
{
  constructor()
  {
    super();
    this.reverseBit = this.reverseBit.bind(this);
  }

  state = 
  {
    bits:
    [
      {weight:"7", status : false },
      {weight:"6", status : false },
      {weight:"5", status : false },
      {weight:"4", status : false },
      {weight:"3", status : false },
      {weight:"2", status : false },
      {weight:"1", status : false },
      {weight:"0", status : false },
      
    ],
    weight:false,
    status:false,
    decNumber:0,
    decLow:0,
    decHigh:0,
    hexNumber:'0',
    hexLow:'0',
    hexHigh:'0',
  }
  
  reverseBit(weight, status)
  {
    let delta = 1;
    let deltaLow = 1;
    let deltaHigh = 1;

    let dec = this.state.decNumber;
    let decLow = this.state.decLow;
    let decHigh = this.state.decHigh;

    let hex = dec.toString(16);
    let hexLow = decLow.toString(16);
    let hexHigh = decHigh.toString(16);

    for(let i = 0; i < weight; i++)
    {
      delta = delta * 2;
      if(i < 4)
      {
        deltaLow = deltaLow * 2;
      }
      else
      {
        deltaHigh = deltaHigh * 2;
      }
    }

    if(status)
    {
      dec = dec + delta;
      hex = dec.toString(16);
      this.setState({decNumber: dec, hexNumber: hex});

      if(weight < 4)
      {
        decLow = decLow + deltaLow;
        hexLow = decLow.toString(16);
        this.setState({decLow: decLow, hexLow: hexLow});
      }
      else
      {
        decHigh = decHigh + deltaHigh;
        hexHigh = decHigh.toString(16);
        this.setState({decHigh: decHigh, hexHigh: hexHigh});
      }      
    }
    else
    {
      dec = dec - delta;
      hex = dec.toString(16);
      this.setState({decNumber: dec, hexNumber: hex});
      if(weight < 4)
        {
          decLow = decLow - deltaLow;
          hexLow = decLow.toString(16);
          this.setState({decLow: decLow, hexLow: hexLow});
        }
        else
        {
          decHigh = decHigh - deltaHigh;
          hexHigh = decHigh.toString(16);
          this.setState({decHigh: decHigh, hexHigh: hexHigh});
        }   
    }   

    this.setState(state => {
      return{
        bits: this.state.bits.map(b => b.weight === weight ? {weight : weight, status : status} : b)        
      }
    });
  }

  render() 
  {
    return(
      <>
        <div class="box">
          <Bits bits = {this.state.bits} reverseBit = {this.reverseBit}/>
          <div style={{fontWeight: "bold", marginLeft : 8, marginTop: 1 }}>{this.state.decNumber}</div>
          <div style={{fontWeight: "bold", marginLeft : 8, marginTop: 1 }}>{this.state.hexNumber}</div>
        </div>
        <div class="box2">
          <div style={{fontWeight: "bold", marginLeft : 40, marginTop: 1 }}>{this.state.hexHigh}</div>
          <div style={{fontWeight: "bold", marginLeft : 80, marginTop: 1 }}>{this.state.hexLow}</div>
        </div>
      </>    
    );
  }
}

export default App;

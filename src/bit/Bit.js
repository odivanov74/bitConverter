import React from "react";

class Bit extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            btns:
            [
                {weiht: 0, status: false},
                {weiht: 1, status: false},
                {weiht: 2, status: false},
                {weiht: 3, status: false},
                {weiht: 4, status: false},
                {weiht: 5, status: false},
                {weiht: 6, status: false},
                {weiht: 7, status: false},
            ],
            //weight : 0,
            status : false
        }
    }    

    buttonState = (weight) => this.setState({ status : !this.state.status })
     

    render()
    {
        return(
            <>
               <button onClick={() => this.buttonState(0) }>{this.state.status ? "1" : "0" }</button> 
            </>
        )
    }
}

export default Bit;
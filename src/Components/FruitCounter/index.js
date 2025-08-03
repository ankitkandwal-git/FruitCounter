import { Component} from "react";

import './index.css'

class FruitCounter extends Component{
    state = {
        mangoCount : 0,
        bananaCount : 0
    }
    eatMango = () =>{
        this.setState((prevState)=>({
            mangoCount:prevState.mangoCount+1
        }),console.log("Mango Eat done"))
    }
    eatBanana = () =>{
        this.setState((prevState)=>({
            bananaCount:prevState.bananaCount+1
        }),console.log("Banana eat Done"))
    }
    render(){
        const {mangoCount,bananaCount} = this.state
        return(
            <div className="bg-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="images"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="images"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
        )
    }
}
export default FruitCounter
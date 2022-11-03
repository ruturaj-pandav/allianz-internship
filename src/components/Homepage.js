import React, { Component } from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import Middle from "./Middle";
import axios from "axios";
export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      rest: [],
      rhs: null,
      values: [],
    };
  }
  componentDidMount() {
    this.getValues();
  }
  getValues = async () => {
  
    console.log("getting values")
    let response = await axios.get("https://allianz-internship.herokuapp.com/values");
    if (response.data.status) {
      
      this.setState({ values: response.data.values });
    }
  };
  removefromrest = (i) => {
   
    let currentarray = this.state.rest;
    currentarray.splice(i, 1);
    
    this.setState({ rest: currentarray });
  };
  solve = () => {
    let rhs = this.state.rhs;

    if (rhs != null) {
      let rest = this.state.rest.join(" ");

      let equation = `${rest} ${rhs}`;
      let values = this.state.values;

      let A = values[0];
      let B = values[1];
      let C = values[2];
      let D = values[3];
      let E = values[4];
 
      let result = eval(equation);
      if (result) {
        alert("True");
      } else {
        alert("False");
      }
    } else {
      alert("equation not correctly formateed.. please reset and try again");
    }
    this.reset();
  };
  // setEquation = (element) => {
  //   console.log("setting equation ", element);
  //
  //
  //   this.setState({ equation: currentarray });
  // };
  setrhs = (element) => {

    this.setState({ rhs: element });
  };
  reset = () => {
  
    this.setState({ rhs: null });
    this.setState({ rest: [] });
  };
  setrest = (element) => {
  
    let currentarray = this.state.rest;
    currentarray.push(element);
    this.setState({ rest: currentarray });
  };

  render() {
    return (
      <div className="container p-3">
        <Top setrest={this.setrest} />
        <Middle setrhs={this.setrhs} setrest={this.setrest} />
        <Bottom
          solve={this.solve}
          reset={this.reset}
          rest={this.state.rest}
          rhs={this.state.rhs}
          setrest={this.setrest}
          removefromrest={this.removefromrest}
        />
      </div>
    );
  }
}

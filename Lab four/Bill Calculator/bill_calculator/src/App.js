import React from "react";
import Input from "./Components/input";
import Table from "./Components/table";
import './style/style.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: 0,
      charge: 0,
      net: 0,
    };
    this.changeUnits = this.changeUnits.bind(this);
  }

  changeUnits(evt) {
    var units_char = 0;
    var amount = 0;
    var units = evt.target.value;
    if (units === '') {
        units = 0
    }
    if (units <= 100) {
      amount = 0;
    }
    if (units >= 101 && units <= 200) {
      units_char = units * 3.75;
      amount = 100 + units_char - 250;
    }
    if (units >= 201 && units <= 400) {
      units_char = units * 4;
      amount = 250 + units_char - 250;
    }
    if (units >= 401 && units <= 600) {
      units_char = units * 4.25;
      amount = 300 + units_char - 250;
    }
    if (units >= 600) {
      units_char = units * 5;
      amount = 400 + units_char - 250;
    }
    if (units != null) {
        this.setState({
            units: units,
            charge: units_char,
            net: amount,
          });
    }
  }

  render() {
    return (
      <div>
        <h1>Bill Calculator</h1>
        <Input placeholder="Enter units" onChange={this.changeUnits} />
        <Table
          units={this.state.units}
          charge={this.state.charge}
          net={this.state.net}
        />
      </div>
    );
  }
}
export default App;

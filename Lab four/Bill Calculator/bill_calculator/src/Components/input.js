import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <input id="input" onChange={this.props.onChange} 
                    placeholder={this.props.placeholder} 
                    value={this.props.units}
                    type="number" />
        )
    }
}
export default Input
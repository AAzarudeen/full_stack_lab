import React from "react";
import Result from "./result";

class Table extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <table>
                <Result description="Consumed Units:" value={this.props.units}/>
                <Result description="Current Charges Rs." value={this.props.charge}/>
                <Result description="New Subsidy Rs.(-)" value={250}/>
                <Result description="Net Amount Rs." value={this.props.net}/>
            </table>
        )
    }
}
export default Table
import React from "react";
class Result extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <tr>
                <td>
                    {this.props.description}
                </td>
                <td>
                    <p>{this.props.value}</p>
                </td>
            </tr>
            
        )
    }
}
export default Result
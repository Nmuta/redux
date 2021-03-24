import { Component } from "react";

class Item extends Component {

    render(){
        return <div style={{color: "blue", width: "100px"}}>{this.props.item}</div>
    }
}

export default Item
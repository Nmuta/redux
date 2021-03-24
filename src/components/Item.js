import { Component } from "react";

class Item extends Component {

    componentDidMount(){
        console.log("my item is", this.props.item.name)
    }

    render(){
        return <span>{this.props.item.name}</span>
    }
}

export default Item
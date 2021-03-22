import { Component } from "react";
    


class Nav extends Component{

    state = {currentMessage: "not set yet"}

   

    
    render(){
        return(
            <div className='nav'>
                 <h5>All state in this app is managed by Redux.</h5>
                 <input />
                 <button>submit</button>
            </div>
            )
    }
}



 

export default Nav;
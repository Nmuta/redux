
import { Component } from 'react';
import '../App.css';
import Phone1 from './Phone1';
import Phone2 from './Phone2';
import { connect } from 'react-redux'


class Phones extends Component {
    render(){
        return(
            <div className='phone-container'>
                <Phone1 />
                <Phone2 />
            </div>
            )
    }
}



const mapStateToProps = state => ({
    message: state.message
})

export default connect(mapStateToProps)(Phones)
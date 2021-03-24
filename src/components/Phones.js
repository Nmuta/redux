
import '../App.css';
import Phone1 from './Phone1';
import Phone2 from './Phone2';
import Phone3 from './Phone3';

const Phones = () => {
    return(
        <div className='phone-container'>
            <Phone1 />
            <Phone2 />
            <Phone3 />
        </div>
        )
}

export default Phones;
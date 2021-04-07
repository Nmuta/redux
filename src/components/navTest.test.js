import Nav from './Nav';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

const middleton = [thunk];
const mockStore = configureMockStore(middleton);


test('Shallow test of the Nav component', ()=> {
    const store = mockStore({messageReducer: {message: "nein"}, itemsReducer: []});
    const wrapper = shallow(
          <Nav.WrappedComponent />
        )

    const countable_objects = wrapper.find('.countable');
    expect(countable_objects).toHaveLength(3);

    const clickable_button = wrapper.find('.btn');
    console.log("clickable button is ", clickable_button.get(0))
    clickable_button.get(0).props.onClick();
    
 


})
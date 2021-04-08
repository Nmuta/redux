import Nav from './Nav';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

const middleton = [thunk];
const mockStore = configureMockStore(middleton);


test('Shallow test of the Nav component', ()=> {
    const wrapper = shallow(
          <Nav.WrappedComponent />
        )

    const countable_objects = wrapper.find('.countable');
    expect(countable_objects).toHaveLength(3);

    const clickable_button = wrapper.find('.btn');
    console.log("clickable button is ", clickable_button.get(0))
    

})

test('renders the same way every time', () => {
    const tree = renderer.create( <Nav.WrappedComponent /> ).toJSON();
    // expect(tree).toMatchSnapshot();
  });


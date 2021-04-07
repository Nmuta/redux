import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import App from '../App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

const middleton = [thunk];
const mockStore = configureMockStore(middleton);


test('Shallow test of the Nav component', ()=> {
    const store = mockStore({messageReducer: {message: "nein"}, itemsReducer: []});
    const wrapper = shallow(
    <Provider store={store}>
            <Nav />
    </Provider>)

    const wrappa = wrapper.find("connect(Nav))");
    console.log("wrappa keys are", Object.keys(wrappa));
    expect(wrappa).toHaveLength(0);

})
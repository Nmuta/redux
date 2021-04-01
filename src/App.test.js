import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares)

test('renders learn react link', () => {
  const store = mockStore({messageReducer: {message: "nein"}})
  render(
    <Provider store={store} > 
      <App  />
    </Provider>)
  const linkElement = screen.getByText(/Phones/i);
  expect(linkElement).toBeInTheDocument();
});

// <Provider store={ store() }> 
//        <App />
//      </Provider>
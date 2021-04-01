import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

test('renders learn react link', () => {
  const store = mockstore({messageReducer: {message: "nein"}, itemsReducer: []});
  render(
    <Provider store={ store }>
    <App />
  </Provider>
  );
  const linkElement = screen.getByText(/phones/i);
  expect(linkElement).toBeInTheDocument();
});

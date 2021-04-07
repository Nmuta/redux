import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlestuff = [thunk];
const mockedstore = configureMockStore(middlestuff);

test('renders learn react link', () => {
  const store = mockedstore({messageReducer: {message: "nein"}, itemsReducer: []})
  render(
  <Provider store={store}> 
    <App />
  </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

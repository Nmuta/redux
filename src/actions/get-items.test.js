 
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED} from '../actions/getItems';
import fetchMock from 'fetch-mock';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_ITEMS_SUCCESS when fetching items from the server', async () => {
    const items = [
        {"product_id":1,"quantity":1,"id":1},
        {"product_id":2,"quantity":2,"id":2},
        {"product_id":3,"quantity":1,"id":3},
        {"product_id":4,"quantity":4,"id":4},
        {"product_id":5,"quantity":1,"id":5},
        {"product_id":6,"quantity":3,"id":6},
        {"product_id":7,"quantity":1,"id":7},
        {"product_id":8,"quantity":6,"id":8},
        {"product_id":9,"quantity":1,"id":9},
        ]

    fetchMock.get('http://www.myurl.com', items);

    const response = await fetch('http://www.myurl.com');
    const myjson = await(response.json());
     
    const expectedActions = { type: FETCH_ITEMS_SUCCESS, payload: myjson };
    const store = mockStore({messageReducer: {messages: "nein"}, itemsReducer: []});

    let stuff = await store.dispatch(expectedActions);

    let storeGotActions = store.getActions();
    let realpayload = storeGotActions[0];

    expect(realpayload).toEqual(expectedActions)
  })
})
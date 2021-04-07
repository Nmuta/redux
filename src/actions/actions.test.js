import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {getItems, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_REQUEST} from './getItems';
import fetchMock from 'fetch-mock'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('fetch items action', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('should dispatch FETCH_ITEMS_SUCCESS', async () => {
        const items = [{"name":"Mediocre Iron Watch","priceInCents":399,"id":1},
        {"name":"Heavy Duty Concrete Plate","priceInCents":499,"id":2},
        {"name":"Intelligent Paper Knife","priceInCents":1999,"id":3},
        {"name":"Small Aluminum Keyboard","priceInCents":2500,"id":4},
        {"name":"Practical Copper Plate","priceInCents":1000,"id":5},
        {"name":"Awesome Bronze Pants","priceInCents":399,"id":6},
        {"name":"Intelligent Leather Clock","priceInCents":2999,"id":7},
        {"name":"Ergonomic Bronze Lamp","priceInCents":40000,"id":8},
        {"name":"Awesome Leather Shoes","priceInCents":3990,"id":9}]
        

        fetchMock.get("http://localhost:8082/api/products", items);


        const expectedActions = [
            {type: FETCH_ITEMS_REQUEST},
            { type: FETCH_ITEMS_SUCCESS,
             payload: items
            }, 
        ]
        const store = mockStore({ messageReducer: {message: "nein"}, itemsReducer: [] })

        
        return store.dispatch(getItems()).then(()=> {
            expect(store.getActions()).toEqual(expectedActions);
        })
     })
})
import rootReducer from '../reducers/rootReducer.js'

const initialState = {
    rectangles: [
        {
          x: 10,
          y: 10,
          width: 50,
          height: 50,
          color: 'red'
        }
      ]
}

const store = createStore(rootReducer, initialState);

export default store;

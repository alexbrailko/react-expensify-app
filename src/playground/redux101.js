import {createStore} from 'redux';

//Action generators - functions that return action objects
const incrementCount = ( {incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ( {count = 1} = {} ) => ({
    type: 'SET',
    count
});

//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => { //createStore tracks changing data over time
    
    switch (action.type) {
        case 'INCREMENT':
        
        return {
            count: state.count + action.incrementBy 
        }
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy  
        }
        case 'RESET':
        return {
            count: 0
        }
        case 'SET':
        return {
            count: action.count
        }
        default: 
            return state;
        
    }
   
};

const store = createStore(countReducer);

//watch for changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// }); //allows to send off an action object

store.dispatch(incrementCount({ incrementBy: 5 })); 

store.dispatch(incrementCount()); 


//reset
store.dispatch(resetCount()); 

store.dispatch(decrementCount({ decrementBy: 10 })); 

store.dispatch(setCount({ count: 101 })); 
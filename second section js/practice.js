// Immer Package for Redux and React
//it helps to write code immutably
// Redux Toolkit uses immer
//Immutable coding simply means that if we want to make a change in an object that we create then we have to create a new object we can't modify the existing object
// the State changes in react frames are checked by comparing the references
//So if we mutate the object then the reference doesn't get changed,only the value  of the object get changed so it can't understand the state change
import{createStore} from 'redux';

const initialState = {
    value: 0
};

function appReducer(prevState = initialState,action){
    switch (action.type){
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + 1
            };
            case 'decrement':
                return{
                    ...prevState,
                    value: prevState.value - 1
                };
                default:
                    return prevState;
    }
}
 
const store = createStore(appReducer);
export default store;
// copying using spread operator is called shallow copy (no children are copied)
//deep copy  if we give a nested object it create a new object with new reference for each

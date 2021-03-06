import {createStore} from "redux"

const incrementCount = ({incrementBy = 1} = {})=>({
    type : "INCREMENT",
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ( {
    type: "DECREMENT",
    decrementBy
} )

const setCount = ({count = 101 } = {}) => ( {
    type: "SET",
    count
} )

const reset = () => ( {
    type: "RESET",
    count : 0
} )


const store = createStore((state = {count : 0} , action)=>{
    
    switch (action.type) {
        case "INCREMENT": 
            return{
                count: state.count + action.incrementBy
            }
            
            case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }

        case "SET":
            return {
                count: action.count
            }

        case "RESET":
            return {
                count: 0
            }

        default:
            return state
            break;
    }
    
});



const unsubscribe = store.subscribe(()=>{
    console.log( store.getState() )
})

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy:5
// });

store.dispatch(incrementCount({ incrementBy : 5 }))
store.dispatch( decrementCount( { decrementBy : 4 }))
store.dispatch( reset( { decrementBy : 4 }))
store.dispatch( setCount( { count : 4 }))
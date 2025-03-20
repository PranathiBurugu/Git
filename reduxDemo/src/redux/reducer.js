const initialState = {
    count:0
}
function myReducer(state=initialState,action)
{
    switch(action.type)
    {
        case "INCR":return {count : state.count+1};
        case "DECR":return {count : state.count-1};
        case "Reset":return {count : 0};
        default : return state;
    }
}

export default myReducer;
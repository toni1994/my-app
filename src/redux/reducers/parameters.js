const initialState = {}

export default function reducer(state = initialState , action){
    switch(action.type)
    {
    case "GET_PARAMETERS":
        return {...state,toni:4}
    case  "GET_PARAMETERS_SUCCESS":
        return {...state, data: action.values}
    default:
        return state;
    }

}
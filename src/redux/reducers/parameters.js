const initialState = { dataInterval: 2, start: false , data: [], latestMeasurement: {}, people: null}

export default function reducer(state = initialState , action){
    switch(action.type)
    {
    case "GET_PARAMETERS":
        return {...state}
    case  "GET_PARAMETERS_SUCCESS":
        if(action.values.time === state.latestMeasurement.time)
            return {...state}
        return {...state, latestMeasurement: action.values, data: [...state.data, action.values
         ] }
    
    case "CHANGE_DATA_INTERVAL":
        return {...state, dataInterval: action.value}
    
    case "RESET":
        return {...state, data: [], start: false, latestMeasurement: {}, people: null}
    
    case "START_STOP":
        return {...state, start: action.value}
         
    case "GET_PEOPLE_SUCCESS":
         return {...state, people: action.value}
        
    default:
        return state;
    }

}
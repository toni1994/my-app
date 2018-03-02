const initialState = { dataInterval: 2, start: false , data: [], latestMeasurement: {}}

export default function reducer(state = initialState , action){
    switch(action.type)
    {
    case "GET_PARAMETERS":
        return {...state}
    case  "GET_PARAMETERS_SUCCESS":
    function addLeadingZero(num){
            return (num <= 9)? ("0"+num) : num;
        }
    var currDate = new Date(),
    label = addLeadingZero(currDate.getHours()) + ":" +
            addLeadingZero(currDate.getMinutes()) + ":" +
            addLeadingZero(currDate.getSeconds());
    console.log(label);
        return {...state, latestMeasurement: action.values, data: [...state.data, action.values
         ] }
    
    case "CHANGE_DATA_INTERVAL":
        return {...state, dataInterval: action.value}
    
    case "RESET":
        return {...state, data: [], start: false, latestMeasurement: {}}
    
    case "START_STOP":
        return {...state, start: action.value}
        
    default:
        return state;
    }

}
const initialState = {}

export default function reducer(state = initialState , action){
    switch(action.type)
    {
    case "GET_PARAMETERS":
        return {...state,toni:4}
    case  "GET_PARAMETERS_SUCCESS":
    function addLeadingZero(num){
            return (num <= 9)? ("0"+num) : num;
        }
    var currDate = new Date(),
    label = addLeadingZero(currDate.getHours()) + ":" +
            addLeadingZero(currDate.getMinutes()) + ":" +
            addLeadingZero(currDate.getSeconds());
    console.log(label);
        return {...state, data: action.values}
    default:
        return state;
    }

}
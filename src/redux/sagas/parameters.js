import { put, call, fork, take, } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { api } from '../../services/index';

export function* loadParameters() {
    try {
        const res = yield call(api.getParameters);
        function addLeadingZero(num){
            return (num <= 9)? ("0"+num) : num;
        }
        var currDate = new Date(),
        label = addLeadingZero(currDate.getHours()) + ":" +
            addLeadingZero(currDate.getMinutes()) // + ":" + addLeadingZero(currDate.getSeconds());
        res.time = label
        yield put(actions.getParametersSuccess(res));
    }
    catch(e) {
        yield put(actions.getParametersFailed());
    }

    /*try {
        let NumberOfPeople = yield call(api.getNumberOfPeople);
        let Temperature = yield call(api.getTemperature);
        let Oxygen = yield call(api.getOxygen);
        let Pressure = yield call(api.getPressure);
        let Humidity = yield call(api.getHumidity);
        let Illuminance = yield call(api.getIlluminance);
        /*console.log(Math.floor(NumberOfPeople.v[NumberOfPeople.v.length-1].m[0]))
        console.log(Temperature.v[Temperature.v.length-1].m[0].toFixed(2))
        console.log(Oxygen.v[Oxygen.v.length-1].m[0].toFixed(2))
        console.log((Pressure.v[Pressure.v.length-1].m[0]/1000).toFixed(2))
        console.log(Humidity.v[Humidity.v.length-1].m[0].toFixed(2))
        console.log(Illuminance.v[Illuminance.v.length-1].m[0].toFixed(2))
        yield put(actions.getParametersSuccess({
            time: "11.45",
            numberOfPeople: Math.floor(NumberOfPeople.v[NumberOfPeople.v.length-1].m[0]),
            temperature: Math.round(Temperature.v[Temperature.v.length-1].m[0] * 100) / 100 ,
            oxygen: Math.round(Oxygen.v[Oxygen.v.length-1].m[0] * 100) / 100,
            pressure: Math.round((Pressure.v[Pressure.v.length-1].m[0]/100) * 100) / 100 ,
            humidity: Math.round(Humidity.v[Humidity.v.length-1].m[0] * 100) / 100 ,
            iluminance: Math.round(Illuminance.v[Illuminance.v.length-1].m[0] * 100) / 100 
        }))
    }
    catch(e) {
        yield put(actions.getParametersFailed());
    }*/

}

export function* watchGetParameters() {
    while (true) {
      yield take("GET_PARAMETERS");
      yield call(loadParameters);
    }
  }
    
  export default [
    fork(watchGetParameters),
  ];
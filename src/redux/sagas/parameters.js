import { put, call, fork, take, } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { api } from '../../services/index';

export function* loadParameters() {
    try {

        const res = yield call(api.getParameters);
        yield put(actions.getParametersSuccess(res));
        console.log(res)
    }
    catch(e) {
        yield put(actions.getParametersFailed());
    }

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
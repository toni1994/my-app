import { put, call, fork, take, } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { api } from '../../services/index';


export function* loadPeople() { 
    try { 
        let people = yield call(api.getNumberOfPeople);
        yield put(actions.getPeopleSuccess(Math.floor(people.v[people.v.length-1].m[0])))
    }
    catch(e) {
        yield put(actions.getPeopleFailed());
    }
}

  export function* watchPeople() {
    while (true) {
      yield take("GET_PEOPLE");
      yield call(loadPeople);
    }
  }
    
    
  export default [
    fork(watchPeople),
  ];
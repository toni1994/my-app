import callApi from '../utils/call-api';

export const getParameters = cat => callApi('data', undefined, 'get', null);
export const getNumberOfPeople = cat => callApi('clientapi/v1/sensors/c2a18be7-a16c-401f-900f-b6eb39e341c5/measurements', undefined, 'get', 1);
export const getTemperature = cat => callApi('clientapi/v1/sensors/c742c0e3-6c8d-4bcd-ac4c-cfc745826e3f/measurements', undefined, 'get', 1);
export const getOxygen = cat => callApi('clientapi/v1/sensors/dd660c12-3f5e-4284-bc78-40139b2c5feb/measurements', undefined, 'get', 1);
export const getPressure = cat => callApi('clientapi/v1/sensors/6297a2cd-d50e-4863-88a2-38781ac21862/measurements', undefined, 'get', 1);
export const getHumidity = cat => callApi('clientapi/v1/sensors/62bb15fa-e88b-470f-85dd-2b6855bd2910/measurements', undefined, 'get', 1);
export const getIlluminance = cat => callApi('clientapi/v1/sensors/c205c613-7475-419d-aa44-8264eea22e14/measurements', undefined, 'get', 1);



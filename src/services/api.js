import callApi from '../utils/call-api';

export const getParameters = cat => callApi('data', undefined, 'get', null);
export const getInfoAboutServer = cat => callApi('api/v2/locations/7821f78a-1c50-4751-b2f1-2ead9913d7ef', undefined, 'get', 1);
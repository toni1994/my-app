import callApi from '../utils/call-api';

export const getParameters = cat => callApi('data', undefined, 'get');
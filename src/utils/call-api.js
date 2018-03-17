//import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

//import { camelizeKeys, decamelizeKeys } from 'hump';
// import fetch from 'isomorphic-fetch';
//import qs from 'qs';

//const KEY = 'aee9661b86bf453b87fef9bec68f41e8';
let API_URL = 'http://192.168.1.100:3000';

export default function callApi(endpoint, body, method, header) {

  let headers = new Headers();
  let bodyData = body;
  let queryParams = '';
  if(header !== null){
  API_URL = 'https://eappiot-api.sensbysigma.com'
  headers= {
    'Cache-control': 'no-cache',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMjAyMC0wNC0wNlQwOToxODo1NC45NTUrMDA6MDAiLCJleHAiOjE1ODYxNjQ3MzQsIm5iZiI6LTYyMTM1NTk2ODAwLCJpYXQiOi02MjEzNTU5NjgwMCwibmFtZSI6IkxvbmdLZXkiLCJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsImlzc3VlZCI6IjAwMDEtMDEtMDFUMDA6MDA6MDArMDA6MDAiLCJ1c2VySWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAifQ==.DDSXp5IrSjpivn8ya0iwQapPnDXlKRESGvLhDQbXrGA=',
    'X-DeviceNetwork': 'b6a81728-a517-4a16-bd7f-b1bf6d6f8fb1'
  }}
  else API_URL = 'http://192.168.1.100:3000'


  const URL = `${API_URL}/${endpoint}${queryParams}`;

  return fetch(URL, {
    headers,
    method: method || (body ? 'post' : 'get'),
    mode: 'cors',
    body: bodyData,
  }).then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {

      return json;
    });
}
export const getParameteres = () => ({
    type: 'GET_PARAMETERS',
  })

export const getParametersSuccess = (values) => ({
    type: 'GET_PARAMETERS_SUCCESS',
    values
  })

export const getParametersFailed = () => ({
    type: 'GET_PARAMETERS_FAILED',
  })
  
export const changeDataInterval = (value) => ({
  type: 'CHANGE_DATA_INTERVAL',
  value
})

export const reset = () => ({
  type: 'RESET',
})

export const start_stop = (value) => ({
  type: 'START_STOP',
  value
})

export const getPeople = () => ({
  type: 'GET_PEOPLE',
})

export const getPeopleSuccess = (value) => ({
  type: 'GET_PEOPLE_SUCCESS',
  value
})

export const getPeopleFailed = (value) => ({
  type: 'GET_PEOPLE_FAILED',
  value
})






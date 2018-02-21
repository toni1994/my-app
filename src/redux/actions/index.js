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
  
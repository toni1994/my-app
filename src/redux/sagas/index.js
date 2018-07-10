import parameters from './parameters.js'
import people from './people.js';

export default function* rootSaga() {
    yield [...parameters, ...people
  ];
}

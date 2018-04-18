/**
 * Supply multiple reducer functions, as arguments, and return a new reducer function that pipes the
 * state and action through each reducer in sequence.
 * @param {...functions} reducers like (arg1, arg2, ...), as a serires of arguments.
 * @return {function} a new reducer function that pipes the state and action through each reducer in sequence.
 * Each successive reducer will receive the updated returned by the previous reducer.
 */
export default function reduceReducers(...reducers) {
    return (currentState = {}, action = {}) =>
        reducers.reduce((updatedState, red) => red(updatedState, action), currentState);
}

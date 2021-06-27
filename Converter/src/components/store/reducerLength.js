import { USER_LENGTH, ANSWER, KM_TO_MILE, LEFT, RIGHT } from './actionsTypeLength';

const initState = {
    userData: 0,
    right: "Mile",
    left: "Kilometr",
    length: 0
}

const lengthReducer = (state = initState, action) => {
    switch(action.type){
        case LEFT:
            return {
                ...state,
                left: action.payload
            }
        case RIGHT:
            return {
                ...state,
                right: action.payload
            }
        case USER_LENGTH:
            return {
                ...state,
                userData: action.payload
            }
        case ANSWER:
            return {
                ...state,
                length: action.payload
            };
        default:
            return state
    }
}

export default lengthReducer;
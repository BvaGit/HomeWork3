
import { USER_LENGTH, ANSWER, LEFT, RIGHT } from '../store/actionsTypeLength';

export const userLength = (payload) => ({ type: USER_LENGTH, payload });
export const selLeft = (payload) => ({type: LEFT, payload});
export const selRight = (payload) => ({type: RIGHT, payload});
export const answer = (payload) => ({type: ANSWER, payload});



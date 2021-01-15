import { INITIAL_STATE } from './initial'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './action'

export const saveUsers = (state, action) => ({
    ...state,
    users: action.users
})

export const Examplereducer = createReducer(INITIAL_STATE, {
    [ExampleTypes.SAVE_USERS]: saveUsers,
})
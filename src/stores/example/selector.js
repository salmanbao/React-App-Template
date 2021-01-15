import { createSelector } from 'reselect'

const allusers = (state) =>  state.example.users;

export const firstFive = createSelector(
    [allusers],
    (users) =>  users.splice(0,4) || []
)
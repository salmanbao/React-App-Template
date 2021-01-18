import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    fetchUsers: null,
    saveUsers:['users'],
})

export const ExampleTypes = Types;
export default Creators;
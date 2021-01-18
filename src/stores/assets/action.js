import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    saveAssets: ['assets'],
})

export const AssetsTypes = Types;
export const AssetsActions = Creators; 
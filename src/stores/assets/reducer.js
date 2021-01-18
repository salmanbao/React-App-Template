import { INITIAL_STATE } from './initial'
import { createReducer } from 'reduxsauce'
import { AssetsTypes } from './action'

export const saveAssets = (state, action) => ({
    ...state,
    allAssets: action.assets.assets,

})

export const AssetsReducer = createReducer(INITIAL_STATE, {
    [AssetsTypes.SAVE_ASSETS]: saveAssets,
}) 
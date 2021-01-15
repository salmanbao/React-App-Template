import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from '../stores/example/action'
import {
    exampleMethod,
} from './example';

export default function* root() {
    yield all([
        takeLatest(ExampleTypes.FETCH_USERS, exampleMethod),
    ])
} 
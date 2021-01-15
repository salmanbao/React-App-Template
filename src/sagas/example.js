import { put, call } from 'redux-saga/effects'
import { ExampleService } from '../api/exampleApi';
import ExampleActions from '../stores/example/action'

export function* exampleMethod() {
    const users = yield call(ExampleService.Working)
    yield put(ExampleActions.saveUsers(users))
}
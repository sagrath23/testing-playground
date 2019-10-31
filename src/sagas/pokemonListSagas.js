import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { listPokemons } from '../services';
import * as actions from '../actions';

export function* loadNewPokemonList(action) {
  const requestResult = yield call(listPokemons, action.payload.listUrl);
  yield put(actions.listAction(requestResult.body));
}

// Our watcher Saga: spawn a new loadNewPokemonList task on each INCREMENT_ASYNC
export function* watchLoadNewPokemonList() {
  yield takeEvery(actions.loadListAction, loadNewPokemonList)
}

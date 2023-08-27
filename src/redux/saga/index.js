import { all } from "redux-saga/effects";
import { repoSaga } from "./repoSaga";
import { activitySaga } from "./activitySaga";

export default function* rootSaga() {
  yield all([repoSaga(), activitySaga()]);
}

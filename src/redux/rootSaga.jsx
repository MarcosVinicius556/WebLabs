import { all } from "redux-saga/effects";
import userSaga from "./user/userSaga";

export default function* applicationSagas() {
    return yield all([
        userSaga,
    ]);
}
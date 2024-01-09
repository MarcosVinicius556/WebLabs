import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';


function* fetchLoginUser(action){
    try {
        alert('Usuário logado...')
    } catch (error) {
        console.log(error);
    }
}

export default all([
    takeLatest('user/fetchLoginUser', fetchLoginUser),
]);
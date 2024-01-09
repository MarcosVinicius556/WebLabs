import { createSlice } from '@reduxjs/toolkit';

const initialUserData = {
    name: '',
    password: '',
    token: '',
    roles: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserData,
    reducers: {
        loginUser: (state, action) => {
            // Temporario
            let userData = {
                name: action.payload.user,
                password: action.payload.password
            }
            /** Fazer side effect para requisição... */
            return {
                ...state,
                name: action.payload.user,
                password: action.payload.password,
                token: 'teste',
                role: ['/save-patient', '/search-patient']
            }
        }
    }
});

export const {
    loginUser,
} = userSlice.actions;

export default userSlice.reducer;
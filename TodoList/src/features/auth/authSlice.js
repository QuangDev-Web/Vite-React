import { createSlice } from '@reduxjs/toolkit';

// Đọc user từ localStorage nếu có
const savedUser = JSON.parse(localStorage.getItem('user'));
const initialState = {
    isAuthenticated: !!savedUser, // mặc định chưa login
    user: savedUser || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            // Lưu vào localStorage
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            // Xóa khỏi localStorage
            localStorage.removeItem('user');
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

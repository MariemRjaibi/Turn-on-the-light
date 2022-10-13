import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const darkSlice = createSlice({
	name: 'dark',
	initialState,
	reducers: {
		toggle: (state) => {
			state.value = !state.value;
		},
	},
});

export const { toggle } = darkSlice.actions;
export default darkSlice.reducer;

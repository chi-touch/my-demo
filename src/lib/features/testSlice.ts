import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
    value: number;
}

const initialState: ExampleState ={
    value: 0,
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = testSlice.actions;
export default testSlice.reducer;
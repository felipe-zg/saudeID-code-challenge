import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

type TodosState = {
	todos: Array<ITodo>;
	loading: boolean;
};

export interface ITodo {
	id: number;
    user_id: number;
    title: string;
    due_on: string;
    status: 'pending' | 'completed';
}

const INITIAL_STATE: TodosState = {
    todos: [],
	loading: false,
};

const TodosSlice = createSlice({
	name: 'Todos',
	initialState: INITIAL_STATE,
	reducers: {
		setLoading(state, {payload}: PayloadAction<boolean>) {
			return {
				...state,
				loading: payload,
			};
		},
		setTodos(state, {payload}: PayloadAction<ITodo[]>) {
			return {
				...state,
				todos: payload,
			};
		},
	},
});


export const {setLoading, setTodos} = TodosSlice.actions;

export default TodosSlice.reducer;

export const selectTodosState = (state: RootState) => state.todos;
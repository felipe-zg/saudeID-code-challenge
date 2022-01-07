import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import { AxiosHttpClient } from '../../infra/http/axiosHttpClient';

type TodosState = {
	todos: ITodo[];
	loading: boolean;
	error?: string;
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
		setError(state, {payload}: PayloadAction<string>) {
			return {
				...state,
				error: payload,
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


export const {setLoading, setError, setTodos} = TodosSlice.actions;

export default TodosSlice.reducer;

export const getTodosByUser = (
	id: number,
	onSuccess?: () => void,
	onError?: () => void
) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const {body} = await AxiosHttpClient.getInstance().get({url: `/users/${id}/todos`});
		dispatch(setTodos(body.data as ITodo[]));
		onSuccess && onSuccess();
	} catch (e) {
		dispatch(setError('Falha ao buscar lista de ToDos'));
		onError && onError();
	} finally {
		dispatch(setLoading(false));
	}
};

export const selectTodosState = (state: RootState) => state.todos;
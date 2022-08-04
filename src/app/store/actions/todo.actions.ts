import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('addtodo', props<{title: string}>())
export const deleteTodo = createAction('deletetodo', props<{id: string}>())
export const checkedTodo = createAction('checkedtodo')
export const unCheckedTodo = createAction('uncheckedtodo')
export const deleteCheckedTodos = createAction('deletecheckedtodos')

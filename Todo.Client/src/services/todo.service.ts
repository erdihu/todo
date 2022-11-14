import { AddTodoItemResponse, TodoItem, AddTodoItemRequest } from '../models/todoItem';
import { get, post } from './fetchWrapper';

export async function getAllTodoItems(): Promise<TodoItem[]> {
  return await get<TodoItem[]>('https://localhost:7108/todo/getall');
}

export async function addNewTodoItem(item: AddTodoItemRequest): Promise<AddTodoItemResponse> {
  return await post<AddTodoItemRequest, AddTodoItemResponse>('https://localhost:7108/todo/add', item);
}

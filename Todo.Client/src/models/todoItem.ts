export interface TodoItem {
  id: string;
  text: string;
}

export interface AddTodoItemRequest {
  text: string;
}

export interface AddTodoItemResponse {
  id: string;
}

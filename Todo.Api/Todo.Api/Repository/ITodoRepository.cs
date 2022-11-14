namespace Todo.Api.Repository
{
    public interface ITodoRepository
    {
        Task<TodoItemResponse> AddTodoItemAsync(TodoItemRequest request);

        Task<TodoItemResponse[]> GetAllTodoItemsAsync();
    }
}

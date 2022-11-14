using Microsoft.EntityFrameworkCore;
using Todo.Api.Entities;

namespace Todo.Api.Repository
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoContext _todoContext;

        public TodoRepository(TodoContext todoContext)
        {
            _todoContext = todoContext;
        }

        public async Task<TodoItemResponse> AddTodoItemAsync(TodoItemRequest request)
        {
            var entity = new TodoItemEntity { Text = request.Text };
            await _todoContext.AddAsync(entity);
            await _todoContext.SaveChangesAsync();
            return new TodoItemResponse(entity.Id.ToString(), entity.Text);

        }

        public async Task<TodoItemResponse[]> GetAllTodoItemsAsync()
        {
            var result = await _todoContext.TodoItems.Select(x => new TodoItemResponse(x.Id.ToString(),
                    x.Text))
                .ToArrayAsync();
            return result;
        }
    }
}

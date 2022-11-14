using Microsoft.AspNetCore.Mvc;
using Todo.Api.Repository;

namespace Todo.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _todoRepository;

        public TodoController(ITodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddTodo([FromBody] TodoItemRequest request)
        {
            if (string.IsNullOrEmpty(request.Text))
            {
                return BadRequest("Text is required");
            }

            var response = await _todoRepository.AddTodoItemAsync(request);
            return Ok(response);
        }

        [HttpGet]
        [Route("getall")]
        public async Task<IActionResult> GellAll()
        {
            var response = await _todoRepository.GetAllTodoItemsAsync();
            return Ok(response);
        }


    }
}
using System.ComponentModel.DataAnnotations;

namespace Todo.Api
{
    public class TodoItemRequest
    {
        [Required]
        public string Text { get; set; }
    }

    public class TodoItemResponse
    {
        public TodoItemResponse(string id, string text)
        {
            Id = id;
            Text = text;
        }

        public string Id { get; set; }
        public string Text { get; set; }
    }


}
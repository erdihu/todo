using Microsoft.EntityFrameworkCore;

namespace Todo.Api.Entities
{
    public class TodoContext : DbContext
    {
        protected override void OnConfiguring
            (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "TodoDb");
        }
        public DbSet<TodoItemEntity> TodoItems { get; set; }
    }
}

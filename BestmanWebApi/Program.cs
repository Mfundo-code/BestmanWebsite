
using BestmanWebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();  // Now this will work

// Configure Email Settings
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Add this before app.UseAuthorization()
app.UseCors(policy => policy
    .WithOrigins("http://localhost:3000") // Update with your frontend URL
    .AllowAnyMethod()
    .AllowAnyHeader());

// Add CORS service to DI container
builder.Services.AddCors();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
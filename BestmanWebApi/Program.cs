using BestmanWebApi.Services;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add this block to listen on external IP (very important)
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5006); // Make sure this matches your exposed port
});

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddScoped<IEmailService, EmailService>();

// ✅ Register CORS policy service BEFORE Build()
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ✅ CORS setup
app.UseCors(policy => policy
    .AllowAnyOrigin()  // For now, allow all; you can lock this later
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

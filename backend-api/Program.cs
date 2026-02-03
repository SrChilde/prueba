var builder = WebApplication.CreateBuilder(args);

// 1. Configurar el puerto dinámico para Render (Crítico)
var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";
builder.WebHost.UseUrls($"http://*:{port}");

// 2. Servicios básicos
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// 3. Configurar CORS (Para que tu React pueda conectar)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy => policy.AllowAnyOrigin() 
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// 4. Mapeo de rutas (Fuera de cualquier IF para que funcione en Render)
app.MapControllers(); 
app.UseCors("AllowReact");

// 5. Ruta de prueba WeatherForecast
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
});

app.Run();

// El record debe ir al final o fuera del flujo principal
public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
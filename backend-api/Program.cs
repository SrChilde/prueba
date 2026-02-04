using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

var builder = WebApplication.CreateBuilder(args);

// 1. Configurar el puerto dinámico para Render (OBLIGATORIO)
var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";
builder.WebHost.UseUrls($"http://*:{port}");

// 2. Agregar servicios al contenedor
builder.Services.AddControllers(); // Esto permite que el backend encuentre ServiciosController
builder.Services.AddEndpointsApiExplorer();

// 3. Configurar CORS (Permisos para que el Frontend entre)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy => policy.AllowAnyOrigin() 
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// 4. ORDEN CRÍTICO DE MIDDLEWARES
// El CORS debe ir SIEMPRE antes de los Controladores
app.UseCors("AllowReact"); 

app.MapControllers(); // Esto activa tus rutas de api/servicios

// 5. Rutas de prueba para verificar salud del servidor
app.MapGet("/", () => "Backend funcionando correctamente. Usa /api/servicios para los datos.");

app.MapGet("/weatherforecast", () =>
{
    var summaries = new[] { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching" };
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

// Definición para la ruta de prueba
public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
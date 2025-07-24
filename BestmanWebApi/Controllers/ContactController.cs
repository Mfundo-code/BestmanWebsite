// Controllers/ContactController.cs
using BestmanWebApi.Models;
using BestmanWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace BestmanWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContactForm([FromBody] ContactRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                await _emailService.SendContactEmailAsync(request);
                return Ok(new { message = "Contact request sent successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error sending email: {ex.Message}");
            }
        }
    }
}
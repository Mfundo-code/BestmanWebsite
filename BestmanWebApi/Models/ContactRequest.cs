// Models/ContactRequest.cs
namespace BestmanWebApi.Models
{
    public class ContactRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string RequestType { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}
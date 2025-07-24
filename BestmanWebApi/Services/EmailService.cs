// Services/EmailService.cs
using BestmanWebApi.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace BestmanWebApi.Services
{
    public class EmailSettings
    {
        public string SmtpServer { get; set; } = string.Empty;
        public int SmtpPort { get; set; }
        public string SmtpUsername { get; set; } = string.Empty;
        public string SmtpPassword { get; set; } = string.Empty;
        public string SenderEmail { get; set; } = string.Empty;
        public string ReceiverEmail { get; set; } = string.Empty;
    }

    public interface IEmailService
    {
        Task SendContactEmailAsync(ContactRequest request);
    }

    public class EmailService : IEmailService
    {
        private readonly EmailSettings _settings;

        public EmailService(IOptions<EmailSettings> settings)
        {
            _settings = settings.Value;
        }

        public async Task SendContactEmailAsync(ContactRequest request)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Website Contact", _settings.SenderEmail));
            message.To.Add(new MailboxAddress("Business Owner", _settings.ReceiverEmail));
            message.Subject = request.RequestType;

            var body = new TextPart("html")
            {
                Text = $@"
                    <h3>New Contact Request</h3>
                    <p><strong>Name:</strong> {request.Name} {request.Surname}</p>
                    <p><strong>Email:</strong> {request.Email}</p>
                    <p><strong>Phone:</strong> {request.PhoneNumber}</p>
                    <p><strong>Request Type:</strong> {request.RequestType}</p>
                    <h4>Message:</h4>
                    <p>{request.Message}</p>
                "
            };

            message.Body = body;

            using var client = new SmtpClient();
            await client.ConnectAsync(_settings.SmtpServer, _settings.SmtpPort, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_settings.SmtpUsername, _settings.SmtpPassword);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}
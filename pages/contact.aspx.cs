using System;
using System.Linq;
using System.Net.Mail;

public partial class pages_Contact : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void submit_Click(object sender, EventArgs e)
    {
        if (name.Text != "" && email.Text.Contains('@') && subject.Text != "" && message.Text != "")
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress("nicholasbates.bates@gmail.com");
                mail.To.Add("nicholas.bates@kingsway.school.nz");
                mail.Subject = subject.Text;
                mail.Body = "Subject: " + subject.Text + "\nMessage: " + message.Text +
                    "\n\nFrom: " + name.Text + "\nEmail: " + email.Text;

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential("nicholasbates.bates", "T0lk1enHorseComputer");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                errorStatus.Text = "Success. Thank you for your message";
            }
            catch (Exception) {
                errorStatus.Text = "Something went wrong, please try again later";
            }
        }
        else
        {
            errorStatus.Text = "Please fill in all of the fields. (Make sure to provide a valid email address)";
        }
    }
}
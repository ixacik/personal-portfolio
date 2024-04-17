interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Message from {name}</h1>
    <h3>Email: {email}</h3>
    <p>Message: {message}</p>
  </div>
);

export const ConfirmationTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>
      Your message was sent to{" "}
      <span className="text-green-500">patriklevak@gmail.com</span>
    </h1>
    <h3>Name: {name}</h3>
    <h3>Email: {email}</h3>
    <p className="text-muted-foreground">Message: {message}</p>
  </div>
);

"use server";
import { EmailTemplate } from "@/components/shared/email-template";
import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "patriklevak@gmail.com",
      subject: `New message from ${formData.get("name")}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (error) {
      throw new Error(error.message);
    }
    return { message: "Message sent successfully!", error: "" };
  } catch (error) {
    console.error(error);
    return { message: "An error occurred, please try again.", error };
  }
}

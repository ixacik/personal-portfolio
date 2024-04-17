"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "../_actions/contact.actions";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import error from "next/error";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [response, setResponse] = useState<{
    message: string;
    error: unknown;
  }>();

  function sendForm(formData: FormData) {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await sendEmail(formData);
      setResponse(response);
    });
  }

  return (
    <form action={sendForm} className="w-full max-w-xl relative">
      {(pending || response) && (
        <div className="bg-background/75 flex items-center justify-center absolute z-50 inset-0">
          {pending ? (
            <Loader2 className="text-primary animate-spin size-8" />
          ) : response?.error ? (
            <p className="text-red-500">{response.message}</p>
          ) : response?.message ? (
            <p className="text-green-500">{response.message}</p>
          ) : null}
        </div>
      )}
      <div className="flex max-md:flex-col gap-2 mb-md">
        <div className="w-full space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="rounded-[0.75rem] max-md:text-[1rem]"
          />
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="rounded-[0.75rem] max-md:text-[1rem]"
          />
        </div>
      </div>
      <div className="space-y-2 pb-xs mb-md">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Lorem ipsum..."
          className="rounded-[0.75rem] max-md:text-[1rem]"
        />
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

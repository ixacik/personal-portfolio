"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendForm } from "../_actions/contact.actions";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form action={sendForm} className="space-y-4 w-full max-w-xl">
      <div className="flex gap-2">
        <div className="w-full space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="rounded-[0.75rem]"
          />
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="rounded-[0.75rem]"
          />
        </div>
      </div>
      <div className="space-y-2 pb-xs">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Lorem ipsum..."
          className="rounded-[0.75rem]"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}

"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSchema, messageSchema } from "@/lib/schemas/MessageSchema";
import { useForm } from "react-hook-form";
function ContactForm() {
  const [status, setStatus] = React.useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
    mode: "onSubmit",
  });
  const onSubmit = async (data: MessageSchema) => {
    setStatus("Sending...")
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        const { error } = await response.json();
        setStatus(error || "Failed to send the message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };
  return (
    <>
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block">
          Name :
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="w-full p-2 border-2 border-retro-red text-retro-black"
        />
        {errors.name && (
          <span className="text-retro-red mt-1 mb-2">
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block">
          Email :
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="w-full p-2 border-2 border-retro-red text-retro-black"
        />
        {errors.email && (
          <span className="text-retro-red mt-1 mb-2">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block">
          Message :
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full min-h-36 p-2 border-2 border-retro-red text-retro-black"
        />
        {errors.message && (
          <span className="text-retro-red mt-1 mb-2">
            {errors.message.message}
          </span>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={!isValid}
          className="bg-transparent hover:bg-retro-red text-retro-white border-2 border-retro-red px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </form>
    <span className="text-retro-white mt-1 mb-2 text-center block text-sm">{status}</span>
    </>
  );
}

export default ContactForm;

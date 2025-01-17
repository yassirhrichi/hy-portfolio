"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSchema, messageSchema } from "@/lib/schemas/MessageSchema";
import { useForm } from "react-hook-form";
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
    mode: "onSubmit",
  });
  const onSubmit = (data: MessageSchema) => {
    console.log(data);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="block">
          Name :
        </label>
        <input
          {...register("name")}
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
          className="bg-transparent hover:bg-retro-red text-retro-white border-2 border-retro-red px-4 py-2 font-bold uppercase transition-all duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

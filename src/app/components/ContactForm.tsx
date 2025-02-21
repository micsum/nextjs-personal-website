"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  const personalInfo = [
    { media: "email", link: "mailto:micsum@connect.hku.hk" },
    { media: "github", link: "https://github.com/micsum" },
    { media: "linkedin", link: "https://www.linkedin.com/in/michaelsum" },
  ];

  const getIcon = (media: string) => {
    switch (media) {
      case "email":
        return faEnvelope;
      case "github":
        return faGithub;
      case "linkedin":
        return faLinkedin;
    }
  };

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Valid name should be more than 2 characters!" }),
    email: z.string().email("Please provide a valid email!"),
    subject: z.string().min(2, { message: "Please provide a valid subject!" }),
    message: z
      .string()
      .min(10, { message: "Please enter a least 10 characters!" }),
    copy: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      copy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  async function sendEmail() {
    return;
  }

  return (
    <section className="flex flex-col items-center justify-center py-10">
      <div className="socials flex flex-row gap-4 mb-8">
        {personalInfo.map((contact, index) => (
          <Link key={index} href={contact.link} target="_blank">
            <FontAwesomeIcon
              icon={getIcon(contact.media) ?? faBug}
              className="text-4xl hover:animate-pulse shadow-xl shadow-cyan-500/80 mx-1 mt-1 text-white"
            />
          </Link>
        ))}
      </div>
      <div className="w-full max-w-3xl bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 ">
                    <FormLabel className="font-bold text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="text-white font-semibold placeholder-[#9CA2A9] focus:border-cyan-500"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-bold text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="user@example.com"
                        {...field}
                        className="text-white font-semibold placeholder-[#9CA2A9] focus:border-cyan-500"
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="flex-1 relative">
                  <FormLabel className="font-bold text-white">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject for message"
                      {...field}
                      className="text-white font-semibold placeholder-[#9CA2A9] focus:border-cyan-500"
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      rows={10}
                      {...field}
                      className=" placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 font-semibold focus:border-cyan-500"
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="copy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormLabel className="font-semibold text-white cursor-pointer">
                    Send a copy to yourself
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-slate-100 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white font-bold py-2 px-4"
            >
              Send Message
              <Loader2 size={16} />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;

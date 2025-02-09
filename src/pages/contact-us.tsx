import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { contactDetails, contactOptions } from "@/data/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function ContactUs(): React.ReactNode {
  return (
    <div className="min-h-screen mt-10 bg-black text-gray-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-950 rounded-2xl p-10 shadow-lg">
        <div className="space-y-10">
          <h2 className="text-3xl font-bold">Let's get in touch</h2>
          <Separator className="bg-gray-600" />

          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div key={item.title} className="flex items-start space-x-4">
                <item.icon className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  {item.subtext && (
                    <p className="text-gray-400">{item.subtext}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            {[Github, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-4xl text-center font-bold mb-6">Contact Us</h2>
          <p className="text-gray-400 text-center mb-6">
            Tell us more about yourself and what you've got in mind.
          </p>
          <Separator className="bg-gray-600 mb-6" />

          <form className="space-y-5">
            <div className="space-y-2">
              <Label className="mb-2" htmlFor="name">Your Name</Label>
              <Input  className="border-[1px] border-white" type="text" id="name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="email">Your Email</Label>
              <Input  className="border-[1px] border-white" type="email" id="email" placeholder="you@company.com" />
            </div>

            <div className="space-y-2">
              <Label className="mb-2" htmlFor="project">Tell us about your problem</Label>
              <Textarea className="border-[1px] border-white"  id="project" rows={4} placeholder="Your message..." />
            </div>

            <div>
              <Label>How can we help?</Label>
              <div className="grid grid-cols-2 gap-3">
                {contactOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition"
                  >
                    <Checkbox id={option.id} />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-600 transition"
            >
              Let's get started!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

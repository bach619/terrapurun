"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
  }

  return (
    <div className="min-h-screen bg-[#f0fdf4] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D5A3D] text-center mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Have questions about our products or mission? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-10 h-10 text-[#2D5A3D] mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+62 812 3456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-10 h-10 text-[#2D5A3D] mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@terrapurun.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-10 h-10 text-[#2D5A3D] mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        Jl. Transito Sei RT.11 RW.04,<br />
                        Kuala Kapuas, Central Kalimantan,<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-10 h-10 text-[#2D5A3D] mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-medium mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#2D5A3D] text-white rounded-full hover:bg-[#4A7C3C] transition-colors"
                    >
                      <Facebook className="w-10 h-10" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#2D5A3D] text-white rounded-full hover:bg-[#4A7C3C] transition-colors"
                    >
                      <Instagram className="w-10 h-10" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#2D5A3D] text-white rounded-full hover:bg-[#4A7C3C] transition-colors"
                    >
                      <Twitter className="w-10 h-10" />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Map Image */}
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-4">
                  Location
                </h2>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Map location"
                    className="w-full h-full object-cover"
                  />
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/20 flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                  >
                    <span className="bg-white/90 text-[#2D5A3D] px-4 py-2 rounded-full font-medium">
                      View on Google Maps
                    </span>
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-[#2D5A3D] mb-6">
                Send us a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 234 567 8900" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#2D5A3D] hover:bg-[#4A7C3C]"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
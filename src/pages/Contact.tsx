// src/pages/Contact.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Contact = () => (
  <>
    {/* put the navbar back */}
    <Navbar />

    <div className="min-h-screen bg-background">
      <section className="max-w-2xl mx-auto py-20 px-4">
        <h1 className="font-bangers text-4xl text-center mb-8">Contact Me</h1>

        {/* Netlify form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          {/* required hidden input for Netlify to detect your form */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="How can I help you?"
              required
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div className="text-center">
            <Button type="submit" className="btn-beast">
              Send Message
            </Button>
          </div>

          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              Or back to home.
            </Link>
          </div>
        </form>
      </section>
    </div>
  </>
);

export default Contact;

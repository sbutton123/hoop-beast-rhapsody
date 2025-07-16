// src/pages/Contact.tsx
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  // Pull in optional ?program=… to prefill subject
  const [searchParams] = useSearchParams();
  const program = searchParams.get('program') || '';

  return (
    <div className="min-h-screen bg-background py-16 pt-20">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="font-bangers text-4xl text-center mb-6">
          Contact Me
        </h1>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Netlify form hook */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <Label>
              Don’t fill this out if you’re human: <Input name="bot-field" />
            </Label>
          </p>

          {/* Carry over program & subject */}
          {program && (
            <>
              <input type="hidden" name="program" value={program} />
              <input
                type="hidden"
                name="_subject"
                value={`Booking request: ${program}`}
              />
            </>
          )}

          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder={
                program
                  ? `I’m interested in "${program}". Please tell me more…`
                  : 'How can I help you?'
              }
            />
          </div>

          <div className="text-center">
            <Button type="submit" className="btn-beast">
              Send Message
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Or{' '}
            <Link to="/" className="underline hover:text-primary">
              back to home
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

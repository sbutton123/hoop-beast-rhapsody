// src/pages/Contact.tsx
import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// The Programs page links here with ?program=<key>. These are the
// human readable names shown on the form and sent with the submission.
const PROGRAM_NAMES: Record<string, string> = {
  'groovin': 'Hoopin & Groovin with Greg & Shanda',
  'juggle-workshop': 'Hula Hoop Making & Juggling Making Workshop',
  'harvest': 'Hula Hoop Harvest: Plant a Skill, Watch It Grow',
  'beast-experience': 'The Hula Hoop Beast Experience',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const programKey = (searchParams.get('program') || '').trim()
  // Unknown values are shown as they were passed in rather than dropped
  const program = PROGRAM_NAMES[programKey] || programKey

  return (
    <div className="min-h-screen bg-background py-16 pt-20">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="font-bangers text-4xl text-center mb-6">
          Contact Me
        </h1>

        {/*
          Netlify form. Every field below must also be listed in the hidden
          "contact" form in index.html, or Netlify will not save it.
        */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Netlify form name + honeypot */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <Label>
              Don’t fill this out if you’re human: <Input name="bot-field" tabIndex={-1} autoComplete="off" />
            </Label>
          </p>

          {/* Email notification subject when a program was selected */}
          {program && (
            <input
              type="hidden"
              name="subject"
              data-remove-prefix
              value={`Booking request: ${program}`}
            />
          )}

          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
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
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          {program && (
            <div>
              <Label htmlFor="program">Program</Label>
              <Input
                id="program"
                name="program"
                value={program}
                readOnly
              />
            </div>
          )}

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="How can I help you?"
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
  )
}

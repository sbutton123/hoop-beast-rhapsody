// src/pages/Contact.tsx

import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  // grabs ?program=… from the URL, if present
  const [searchParams] = useSearchParams()
  const program = searchParams.get('program') || ''

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="font-bangers text-4xl text-center mb-6">Contact Me</h1>
        <form
          action="https://formspree.io/f/your‑form‑id"  
          method="POST"
          className="space-y-6"
        >
          {/* Hidden field carries the program name */}
          {program && (
            <input type="hidden" name="program" value={program} />
          )}

          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your full name" />
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
              rows={4}
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

          <div className="text-center text-sm text-gray-500">
            Or <Link to="/" className="underline">back to home</Link>.
          </div>
        </form>
      </div>
    </div>
  )
}

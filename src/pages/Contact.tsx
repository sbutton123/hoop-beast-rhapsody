// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const program = searchParams.get('program') || ''

  // keep the message in state so it can be prefilled and edited
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (program) {
      setMessage(`I’m interested in "${program}". Please tell me more…`)
    }
  }, [program])

  return (
    <>
      <Navbar />

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

            {/* honeypot */}
            <p className="hidden">
              <Label>
                Don’t fill this out if you’re human: <Input name="bot-field" />
              </Label>
            </p>

            {/* keep program in the submission and use for subject */}
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

            {/* Visible Program field */}
            {program && (
              <div>
                <Label htmlFor="program">Program</Label>
                <Input
                  id="program"
                  name="programDisplay"
                  value={program}
                  readOnly
                />
              </div>
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
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
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
              </Link>.
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

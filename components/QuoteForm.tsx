'use client'

import { useState, FormEvent } from 'react'

const serviceOptions = [
  'Exhaust repair',
  'Muffler replacement',
  'Performance exhaust',
  'Custom exhaust',
  'Catalytic converter',
  'Headers / extractors',
  '4WD exhaust',
  'Other',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/quote', { method: 'POST', body: data })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-orange bg-navy p-8 text-center">
        <p className="font-display text-xl font-semibold text-white">Thanks - request sent.</p>
        <p className="mt-2 text-sm text-steel-light">
          We&apos;ll get back to you shortly. For anything urgent, call{' '}
          <a href="tel:+61297083088" className="text-orange">(02) 9708 3088</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-steel-light">
        Tell us about your vehicle and what you&apos;re looking to achieve.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Vehicle make" name="vehicleMake" />
        <Field label="Vehicle model" name="vehicleModel" />
        <Field label="Vehicle year" name="vehicleYear" />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-steel-light">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-steel-dark bg-charcoal px-4 py-3 text-sm text-white focus:border-orange"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-steel-light">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-steel-dark bg-charcoal px-4 py-3 text-sm text-white focus:border-orange"
        />
      </div>

      <div>
        <label htmlFor="photo" className="mb-1.5 block text-sm font-medium text-steel-light">
          Photo (optional)
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="w-full text-sm text-steel-light file:mr-4 file:border-0 file:bg-steel-dark file:px-4 file:py-2 file:text-sm file:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-dim disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending...' : 'Request a Free Quote'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-orange">
          Something went wrong sending this - please call{' '}
          <a href="tel:+61297083088" className="underline">(02) 9708 3088</a> instead.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-steel-light">
        {label}
        {required && <span className="text-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-steel-dark bg-charcoal px-4 py-3 text-sm text-white focus:border-orange"
      />
    </div>
  )
}

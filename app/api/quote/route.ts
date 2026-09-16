import { NextRequest, NextResponse } from 'next/server'

// This route accepts the quote form submission and forwards it on.
// Wire QUOTE_FORM_ENDPOINT (e.g. a transactional email API or a service
// like Formspree/Resend) in .env.local before going live - see README.
export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const payload = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    vehicleMake: formData.get('vehicleMake'),
    vehicleModel: formData.get('vehicleModel'),
    vehicleYear: formData.get('vehicleYear'),
    service: formData.get('service'),
    message: formData.get('message'),
    submittedAt: new Date().toISOString(),
  }

  const endpoint = process.env.QUOTE_FORM_ENDPOINT

  if (!endpoint) {
    // No endpoint configured yet - log so it's visible during development,
    // and still return success so the form can be tested end-to-end.
    console.log('[quote-form] No QUOTE_FORM_ENDPOINT configured. Submission:', payload)
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`)
    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[quote-form] Failed to forward submission', err)
    return NextResponse.json({ ok: false }, { status: 502 })
  }
}

import React, { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes, FaPaperPlane, FaWhatsapp, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaCheck, FaSpinner,
} from 'react-icons/fa'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ruthradigitalsolutions@outlook.com'
const WHATSAPP_NUMBER = '919626380310'
const PHONE_DISPLAY = '+91 96263 80310'

/**
 * Colour themes for the modals. Kept as full class strings so Tailwind keeps them.
 */
export const MODAL_THEMES = {
  sky: {
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    soft: 'bg-sky-50 text-sky-700 border-sky-100',
    active: 'bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/30',
    ring: 'focus:border-sky-500 focus:ring-sky-500/20',
    text: 'text-sky-600',
    button: 'from-sky-600 to-indigo-600 shadow-sky-600/30',
  },
  indigo: {
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    soft: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    active: 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/30',
    ring: 'focus:border-indigo-500 focus:ring-indigo-500/20',
    text: 'text-indigo-600',
    button: 'from-indigo-600 to-purple-600 shadow-indigo-600/30',
  },
  emerald: {
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    soft: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    active: 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30',
    ring: 'focus:border-emerald-500 focus:ring-emerald-500/20',
    text: 'text-emerald-600',
    button: 'from-emerald-600 to-teal-600 shadow-emerald-600/30',
  },
  cyan: {
    gradient: 'from-cyan-500 via-sky-600 to-slate-900',
    soft: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    active: 'bg-cyan-600 text-white border-cyan-600 shadow-lg shadow-cyan-600/30',
    ring: 'focus:border-cyan-500 focus:ring-cyan-500/20',
    text: 'text-cyan-600',
    button: 'from-cyan-600 to-sky-700 shadow-cyan-600/30',
  },
}

/* ------------------------------------------------------------------ */
/* Shell: portal, backdrop, 3D entrance, Esc to close, scroll lock     */
/* ------------------------------------------------------------------ */
const ModalShell = ({ open, onClose, labelledBy, children, maxWidth = 'max-w-2xl' }) => {
  const panelRef = useRef(null)
  const lastFocused = useRef(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') closeRef.current()
      // Keep Tab focus inside the dialog
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => {
      const target = panelRef.current?.querySelector('[data-autofocus]') || panelRef.current
      target?.focus({ preventScroll: true })
    }, 80)

    return () => {
      clearTimeout(t)
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      lastFocused.current?.focus?.()
    }
  }, [open])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ perspective: 1400 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            initial={{ opacity: 0, y: 60, rotateX: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, rotateX: 10, scale: 0.96, transition: { duration: 0.2, ease: 'easeIn' } }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className={`relative z-10 flex max-h-[92vh] w-full ${maxWidth} flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-[0_40px_120px_-20px_rgba(2,6,23,0.6)] outline-none sm:rounded-[2rem]`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:rotate-90 hover:bg-white/30"
            >
              <FaTimes />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

/* ------------------------------------------------------------------ */
/* Enquiry modal: lead form that posts to the same inbox as Contact    */
/* ------------------------------------------------------------------ */
const emptyForm = { name: '', phone: '', email: '', business: '', budget: '', message: '' }

export const EnquiryModal = ({
  open,
  onClose,
  service,
  theme = MODAL_THEMES.indigo,
  heading,
  subheading,
  interests = [],
  defaultInterest,
  budgets = ['Under ₹15k', '₹15k – ₹50k', '₹50k – ₹1L', '₹1L+', 'Not sure yet'],
  budgetLabel = 'Estimated budget',
  businessLabel = 'Business / Hotel name',
  submitLabel = 'Send Enquiry',
}) => {
  const titleId = useId()
  const [form, setForm] = useState(emptyForm)
  const [selected, setSelected] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Reset each time it opens, pre-selecting the interest that opened it
  useEffect(() => {
    if (open) {
      setStatus('idle')
      setSelected(defaultInterest ? [defaultInterest] : [])
    }
  }, [open, defaultInterest])

  const toggle = (item) =>
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          service,
          interested_in: selected.join(', ') || 'Not specified',
          name: form.name,
          phone: form.phone,
          email: form.email,
          business: form.business,
          [budgetLabel.toLowerCase().replace(/\s+/g, '_')]: form.budget,
          message: form.message,
          page: window.location.href,
          _subject: `New ${service} enquiry – ${form.name}`,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      setStatus('success')
      setForm(emptyForm)
    } catch (err) {
      console.error('Enquiry submit failed:', err)
      setStatus('error')
    }
  }

  const waText = encodeURIComponent(
    `Hi Ruthra Digital Solutions, I'm interested in ${service}${selected.length ? ` (${selected.join(', ')})` : ''}.`
  )
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  const inputCls = `w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:ring-4 ${theme.ring}`

  return (
    <ModalShell open={open} onClose={onClose} labelledBy={titleId}>
      {/* Header */}
      <div className={`relative flex-shrink-0 overflow-hidden bg-gradient-to-br ${theme.gradient} px-6 pb-6 pt-7 text-white sm:px-10 sm:pb-8 sm:pt-8`}>
        <div className="modal-orb modal-orb-1" aria-hidden="true" />
        <div className="modal-orb modal-orb-2" aria-hidden="true" />
        <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> {service}
        </span>
        <h2 id={titleId} className="relative mt-4 pr-10 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
          {heading || `Let's talk about your ${service.toLowerCase()} project`}
        </h2>
        <p className="relative mt-2 max-w-lg text-sm font-medium text-white/85 sm:text-base">
          {subheading || 'Share a few details and our team will get back to you within one business day.'}
        </p>
      </div>

      <div className="overflow-y-auto px-6 py-7 sm:px-10">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0 }}
              className="py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.1 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl text-emerald-600"
              >
                <FaCheckCircle />
              </motion.div>
              <h3 className="mt-6 text-2xl font-black text-slate-900">Enquiry received!</h3>
              <p className="mx-auto mt-2 max-w-sm text-slate-600">
                Thank you. Our team will contact you shortly. Need a faster reply? Message us on WhatsApp.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600"
                >
                  <FaWhatsapp /> Continue on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {interests.length > 0 && (
                <fieldset className="mb-6">
                  <legend className="mb-3 text-xs font-black uppercase tracking-widest text-slate-500">
                    What do you need? <span className="font-semibold normal-case tracking-normal text-slate-400">(select all that apply)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => {
                      const on = selected.includes(item)
                      return (
                        <motion.button
                          key={item}
                          type="button"
                          whileTap={{ scale: 0.94 }}
                          onClick={() => toggle(item)}
                          aria-pressed={on}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition ${
                            on ? theme.active : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {on && <FaCheck className="text-[10px]" />} {item}
                        </motion.button>
                      )
                    })}
                  </div>
                </fieldset>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-slate-600">Your name *</span>
                  <input data-autofocus required name="name" value={form.name} onChange={onChange} className={inputCls} placeholder="Full name" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-slate-600">Phone / WhatsApp *</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    pattern="[0-9+\s\-]{10,16}"
                    title="Enter a valid phone number"
                    className={inputCls}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-slate-600">Email</span>
                  <input type="email" name="email" value={form.email} onChange={onChange} className={inputCls} placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-slate-600">{businessLabel}</span>
                  <input name="business" value={form.business} onChange={onChange} className={inputCls} placeholder="Optional" autoComplete="organization" />
                </label>
              </div>

              {budgets?.length > 0 && (
                <label className="mt-4 block">
                  <span className="mb-1.5 block text-xs font-bold text-slate-600">{budgetLabel}</span>
                  <select name="budget" value={form.budget} onChange={onChange} className={inputCls}>
                    <option value="">Select a range (optional)</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </label>
              )}

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold text-slate-600">Tell us more</span>
                <textarea name="message" value={form.message} onChange={onChange} rows={3} className={`${inputCls} resize-none`} placeholder="Goals, timeline, anything we should know…" />
              </label>

              {status === 'error' && (
                <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  Something went wrong sending your enquiry. Please try again, or reach us on WhatsApp / {PHONE_DISPLAY}.
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r ${theme.button} px-6 py-3.5 font-black text-white shadow-xl transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70`}
                >
                  {status === 'sending' ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                  {status === 'sending' ? 'Sending…' : submitLabel}
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3.5 font-bold text-green-700 transition hover:bg-green-100"
                >
                  <FaWhatsapp className="text-lg" /> WhatsApp
                </a>
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                <FaPhoneAlt className="text-[10px]" /> Prefer a call? <a href={`tel:+${WHATSAPP_NUMBER}`} className={`font-bold ${theme.text}`}>{PHONE_DISPLAY}</a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </ModalShell>
  )
}

/* ------------------------------------------------------------------ */
/* Info modal: details for a feature / strategy / technology          */
/* ------------------------------------------------------------------ */
export const InfoModal = ({ open, onClose, item, theme = MODAL_THEMES.indigo, ctaLabel = 'Get a Free Quote', onEnquire }) => {
  const titleId = useId()
  // Keep last item while the exit animation plays
  const [shown, setShown] = useState(item)
  useEffect(() => {
    if (item) setShown(item)
  }, [item])
  const data = item || shown
  if (!data) return null

  return (
    <ModalShell open={open} onClose={onClose} labelledBy={titleId} maxWidth="max-w-3xl">
      <div className={`relative flex-shrink-0 overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}>
        {data.image && (
          <>
            <img src={data.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </>
        )}
        <div className="modal-orb modal-orb-1" aria-hidden="true" />
        <div className="relative px-6 pb-8 pt-10 sm:px-10">
          {data.icon && (
            <motion.div
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 16 }}
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-xl"
            >
              {data.icon}
            </motion.div>
          )}
          {data.eyebrow && <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/75">{data.eyebrow}</div>}
          <h2 id={titleId} className="mt-2 pr-10 text-2xl font-black leading-tight tracking-tight sm:text-4xl">{data.title}</h2>
        </div>
      </div>

      <div className="overflow-y-auto px-6 py-7 sm:px-10">
        <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">{data.description}</p>

        {data.points?.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {data.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold ${theme.soft}`}
              >
                <FaCheck className="mt-0.5 flex-shrink-0 text-xs" /> {p}
              </motion.li>
            ))}
          </ul>
        )}

        {data.stats?.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className={`text-xl font-black ${theme.text}`}>{s.value}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {onEnquire && (
            <button
              type="button"
              onClick={() => onEnquire(data)}
              className={`group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r ${theme.button} px-6 py-3.5 font-black text-white shadow-xl transition hover:-translate-y-0.5`}
            >
              {ctaLabel} <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </ModalShell>
  )
}

/* ------------------------------------------------------------------ */
/* Hook: one place to manage both modals on a page                    */
/* ------------------------------------------------------------------ */
export const useServiceModals = () => {
  const [enquiry, setEnquiry] = useState({ open: false })
  const [info, setInfo] = useState(null)

  const openEnquiry = (opts = {}) => {
    setInfo(null)
    setEnquiry({ open: true, ...opts })
  }
  const closeEnquiry = () => setEnquiry((e) => ({ ...e, open: false }))
  const openInfo = (item) => setInfo(item)
  const closeInfo = () => setInfo(null)

  return { enquiry, openEnquiry, closeEnquiry, info, openInfo, closeInfo }
}

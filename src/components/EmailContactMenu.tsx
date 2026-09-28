import { useEffect, useRef, useState } from 'react'

interface EmailContactMenuProps {
  email: string
  label: string
  openGmailLabel: string
  copyLabel: string
  copiedLabel: string
  variant: 'pill' | 'cta'
}

export function EmailContactMenu({
  email,
  label,
  openGmailLabel,
  copyLabel,
  copiedLabel,
  variant,
}: EmailContactMenuProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const input = document.createElement('textarea')
      input.value = email
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }

    setCopied(true)
    window.setTimeout(() => {
      setCopied(false)
      setOpen(false)
    }, 1200)
  }

  const triggerClassName = variant === 'pill'
    ? 'contact-pill email-menu-trigger'
    : 'contact-cta-link email-menu-trigger'

  return (
    <div
      className={`email-contact-menu email-menu-${variant}`}
      ref={rootRef}
    >
      <button
        type="button"
        className={triggerClassName}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <i className="bi bi-envelope" aria-hidden="true" />
        <span>{label}</span>
        <i className={`bi bi-chevron-down email-menu-chevron ${open ? 'open' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="email-menu-popover" role="menu">
          <span className="email-menu-address">{email}</span>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            className="email-menu-action"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
            <span>{openGmailLabel}</span>
          </a>

          <button
            type="button"
            role="menuitem"
            className={`email-menu-action ${copied ? 'is-copied' : ''}`}
            onClick={copyEmail}
          >
            <i className={`bi ${copied ? 'bi-check2' : 'bi-copy'}`} aria-hidden="true" />
            <span>{copied ? copiedLabel : copyLabel}</span>
          </button>
        </div>
      )}
    </div>
  )
}

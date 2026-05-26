"use client"

export function CrescentMoon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  )
}

export function Mosque({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
    >
      <path d="M32 4c-2 0-4 6-4 12h8c0-6-2-12-4-12zM16 20c-1.5 0-3 4-3 8h6c0-4-1.5-8-3-8zM48 20c-1.5 0-3 4-3 8h6c0-4-1.5-8-3-8zM8 32h48v4H8zM12 36h4v24h-4zM24 36h4v24h-4zM36 36h4v24h-4zM48 36h4v24h-4zM28 44h8v16h-8z" />
    </svg>
  )
}

export function Lantern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2v2M12 2c-1 0-2 1-2 2h4c0-1-1-2-2-2zM8 6h8l1 2H7l1-2zM7 8h10v2H7zM8 10h8v10c0 1-1 2-2 2h-4c-1 0-2-1-2-2V10zM10 12v6M12 12v6M14 12v6" />
    </svg>
  )
}

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  )
}

export function GeometricPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      className={className}
    >
      <polygon points="50,10 90,50 50,90 10,50" />
      <polygon points="50,20 80,50 50,80 20,50" />
      <polygon points="50,30 70,50 50,70 30,50" />
      <circle cx="50" cy="50" r="15" />
    </svg>
  )
}

export function Sheep({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
    >
      <ellipse cx="32" cy="36" rx="20" ry="14" />
      <circle cx="32" cy="36" r="12" />
      <circle cx="26" cy="32" r="4" />
      <circle cx="38" cy="32" r="4" />
      <circle cx="32" cy="38" r="4" />
      <circle cx="28" cy="40" r="3" />
      <circle cx="36" cy="40" r="3" />
      <ellipse cx="20" cy="24" rx="8" ry="6" />
      <circle cx="17" cy="22" r="1.5" fill="black" />
      <ellipse cx="14" cy="20" rx="3" ry="2" />
      <line x1="24" y1="50" x2="24" y2="58" stroke="currentColor" strokeWidth="3" />
      <line x1="40" y1="50" x2="40" y2="58" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

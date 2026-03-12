import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick?: () => void
}

export function Card({ children, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        cursor: "pointer",
        boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
        transition: "transform 0.1s",
      }}
    >
      {children}
    </div>
  )
}
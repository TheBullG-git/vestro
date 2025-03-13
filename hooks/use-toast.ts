"use client"

import * as React from "react"

type ToastProps = {
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

type ToastActionElement = React.ReactElement

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...props, id, open: true }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // For console logging in development
    console.log(`Toast: ${props.title} - ${props.description}`)

    return {
      id,
      dismiss: () => {
        setToasts((prevToasts) => prevToasts.map((t) => (t.id === id ? { ...t, open: false } : t)))
      },
      update: (props: ToastProps) => {
        setToasts((prevToasts) => prevToasts.map((t) => (t.id === id ? { ...t, ...props } : t)))
      },
    }
  }

  const dismiss = (toastId?: string) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (toastId ? (t.id === toastId ? { ...t, open: false } : t) : { ...t, open: false })),
    )
  }

  return {
    toast,
    toasts,
    dismiss,
  }
}

export type { ToastProps, ToastActionElement }


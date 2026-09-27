"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { XIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const toast = ToastPrimitive.createToastManager()

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "pointer-events-none fixed inset-x-4 top-4 z-50 mx-auto w-auto max-w-sm outline-none sm:right-4 sm:left-auto sm:mx-0 sm:w-full",
        className
      )}
      {...props}
    />
  )
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        "group/toast pointer-events-auto absolute right-0 top-0 z-[calc(1000-var(--toast-index))] w-full origin-top rounded-2xl border border-(--toast-line) bg-(--toast-surface) text-(--toast-fg) shadow-lg will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "[--toast-surface:var(--popover)] [--toast-fg:var(--popover-foreground)] [--toast-muted:var(--muted-foreground)] [--toast-line:var(--border)]",
        "data-[type=success]:[--toast-surface:var(--color-green-50)] data-[type=success]:[--toast-fg:var(--color-green-950)] data-[type=success]:[--toast-muted:var(--color-green-800)] data-[type=success]:[--toast-line:var(--color-green-200)]",
        "data-[type=info]:[--toast-surface:var(--color-blue-50)] data-[type=info]:[--toast-fg:var(--color-blue-950)] data-[type=info]:[--toast-muted:var(--color-blue-800)] data-[type=info]:[--toast-line:var(--color-blue-200)]",
        "data-[type=warning]:[--toast-surface:var(--color-amber-50)] data-[type=warning]:[--toast-fg:var(--color-amber-950)] data-[type=warning]:[--toast-muted:var(--color-amber-800)] data-[type=warning]:[--toast-line:var(--color-amber-200)]",
        "data-[type=error]:[--toast-surface:var(--color-red-50)] data-[type=error]:[--toast-fg:var(--color-red-950)] data-[type=error]:[--toast-muted:var(--color-red-800)] data-[type=error]:[--toast-line:var(--color-red-200)]",
        "data-[type=loading]:[--toast-surface:var(--color-slate-50)] data-[type=loading]:[--toast-fg:var(--color-slate-950)] data-[type=loading]:[--toast-muted:var(--color-slate-800)] data-[type=loading]:[--toast-line:var(--color-slate-200)]",
        "dark:data-[type=success]:[--toast-surface:var(--color-green-950)] dark:data-[type=success]:[--toast-fg:var(--color-green-50)] dark:data-[type=success]:[--toast-muted:var(--color-green-200)] dark:data-[type=success]:[--toast-line:var(--color-green-800)]",
        "dark:data-[type=info]:[--toast-surface:var(--color-blue-950)] dark:data-[type=info]:[--toast-fg:var(--color-blue-50)] dark:data-[type=info]:[--toast-muted:var(--color-blue-200)] dark:data-[type=info]:[--toast-line:var(--color-blue-800)]",
        "dark:data-[type=warning]:[--toast-surface:var(--color-amber-950)] dark:data-[type=warning]:[--toast-fg:var(--color-amber-50)] dark:data-[type=warning]:[--toast-muted:var(--color-amber-200)] dark:data-[type=warning]:[--toast-line:var(--color-amber-800)]",
        "dark:data-[type=error]:[--toast-surface:var(--color-red-950)] dark:data-[type=error]:[--toast-fg:var(--color-red-50)] dark:data-[type=error]:[--toast-muted:var(--color-red-200)] dark:data-[type=error]:[--toast-line:var(--color-red-800)]",
        "dark:data-[type=loading]:[--toast-surface:var(--color-slate-950)] dark:data-[type=loading]:[--toast-fg:var(--color-slate-50)] dark:data-[type=loading]:[--toast-muted:var(--color-slate-200)] dark:data-[type=loading]:[--toast-line:var(--color-slate-800)]",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",
        "after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
        "data-limited:opacity-0 data-starting-style:[transform:translateY(-150%)]",
        "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(-150%)]",
        "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        className
      )}
      {...props}
    />
  )
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm text-(--toast-muted)", className)}
      {...props}
    />
  )
}

function ToastAction({
  className,
  render = <Button variant="outline" size="sm" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon-sm" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={cn(
        "relative shrink-0 text-(--toast-muted) after:absolute after:-inset-2 after:content-[''] hover:text-(--toast-fg)",
        className
      )}
      {...props}
    >
      {children ?? (
        <XIcon aria-hidden="true" />
      )}
    </ToastPrimitive.Close>
  )
}

function ToastIcon({ type }: { type: string | undefined }) {
  let icon: React.ReactNode = null

  if (type === "success") {
    icon = (
      <CircleCheckIcon aria-hidden="true" />
    )
  }

  if (type === "info") {
    icon = (
      <InfoIcon aria-hidden="true" />
    )
  }

  if (type === "warning") {
    icon = (
      <TriangleAlertIcon aria-hidden="true" />
    )
  }

  if (type === "error") {
    icon = <OctagonXIcon aria-hidden="true" />
  }

  if (type === "loading") {
    icon = (
      <Loader2Icon className="animate-spin" aria-hidden="true" />
    )
  }

  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      className="shrink-0 text-(--toast-muted) [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
    >
      {icon}
    </span>
  )
}

function ToastTimer({ duration }: { duration: number }) {
  return (
    <span
      data-slot="toast-timer"
      aria-hidden="true"
      style={{ "--toast-duration": `${duration}ms` } as React.CSSProperties}
      className="pointer-events-none absolute inset-x-2 bottom-1 h-0.5 origin-left rounded-full bg-current opacity-40 [animation:toast-timer_var(--toast-duration)_linear_forwards] group-data-[expanded=true]/toast:[animation-play-state:paused]"
    />
  )
}

function ToastList({ timeout }: { timeout: number }) {
  const { toasts } = ToastPrimitive.useToastManager()

  return toasts.map((toastItem) => {
    const duration = toastItem.timeout ?? timeout

    return (
      <Toast key={toastItem.id} toast={toastItem}>
        <ToastContent>
          <ToastIcon type={toastItem.type} />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <ToastTitle />
            <ToastDescription />
          </div>
          <ToastAction />
          <ToastClose />
        </ToastContent>
        {duration > 0 && <ToastTimer duration={duration} />}
      </Toast>
    )
  })
}

function Toaster({
  children,
  toastManager = toast,
  timeout = 3000,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider toastManager={toastManager} timeout={timeout} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList timeout={timeout} />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTimer,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}

// framer-motion not needed in CustomCursor
import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [isTouch] = useState(() => window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches)
  const [label, setLabel] = useState('')
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (isTouch) return

    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    let rafId: number
    const animate = () => {
      dotX += (mouseX - dotX) * 0.18
      dotY += (mouseY - dotY) * 0.18

      if (ringRef.current) {
        ringRef.current.style.left = `${dotX}px`
        ringRef.current.style.top = `${dotY}px`
      }

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const onEnter = (e: Event) => {
      const el = e.target as HTMLElement
      const cursorLabel = el.getAttribute('data-cursor')
      if (cursorLabel) {
        setLabel(cursorLabel)
        setHovering(true)
      }
    }

    const onLeave = () => {
      setLabel('')
      setHovering(false)
    }

    // WeakMap to track handlers per element for proper cleanup
    const handlerMap = new WeakMap<Element, { enter: EventListener; leave: EventListener }>()

    const attachHandlers = (el: Element) => {
      if (handlerMap.has(el)) return
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      handlerMap.set(el, { enter: onEnter, leave: onLeave })
    }

    const detachHandlers = (el: Element) => {
      const handlers = handlerMap.get(el)
      if (handlers) {
        el.removeEventListener('mouseenter', handlers.enter)
        el.removeEventListener('mouseleave', handlers.leave)
        handlerMap.delete(el)
      }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('[data-cursor]').forEach(attachHandlers)

    const obs = new MutationObserver(() => {
      document.querySelectorAll('[data-cursor]').forEach(attachHandlers)
    })
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      obs.disconnect()
      document.querySelectorAll('[data-cursor]').forEach(detachHandlers)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className={`custom-cursor-ring ${hovering ? 'is-hovering' : ''}`}>
        <span ref={labelRef} className="custom-cursor-label">{label}</span>
      </div>
    </>
  )
}

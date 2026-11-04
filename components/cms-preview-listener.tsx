'use client'

import { useEffect } from 'react'

export function CmsPreviewListener() {
  useEffect(() => {
    const allowedOrigin = (process.env.NEXT_PUBLIC_ADMIN_ORIGIN ?? 'http://localhost:3001').replace(/\/$/, '')

    function receive(event: MessageEvent) {
      if (event.origin !== allowedOrigin) return
      if (!event.data || event.data.type !== 'cms-preview-update' || typeof event.data !== 'object') return
      window.dispatchEvent(new CustomEvent('cms-preview-update', { detail: event.data.page }))
    }

    window.addEventListener('message', receive)
    return () => window.removeEventListener('message', receive)
  }, [])

  return null
}

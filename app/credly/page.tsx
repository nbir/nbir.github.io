'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

// Native dimensions Credly's embed.js renders the badge iframe at.
const BADGE_WIDTH = 576
const BADGE_HEIGHT = 270

function CredlyBadge({ badgeId }: { badgeId: string }) {
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    // Credly renders the badge at a fixed pixel width, so shrinking the iframe
    // clips its content. Instead we scale the whole badge to fit the column.
    const update = () => {
      const inner = outer.querySelector<HTMLElement>('.credly-embed')
      if (!inner) return
      const scale = Math.min(1, outer.clientWidth / BADGE_WIDTH)
      inner.style.transform = `scale(${scale})`
      outer.style.height = `${BADGE_HEIGHT * scale}px`
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(outer)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={outerRef} className="relative overflow-hidden">
      <div
        className="credly-embed"
        style={{
          width: BADGE_WIDTH,
          height: BADGE_HEIGHT,
          transformOrigin: 'top left',
        }}
      >
        <div
          data-iframe-width={BADGE_WIDTH}
          data-iframe-height={BADGE_HEIGHT}
          data-share-badge-id={badgeId}
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
      {/* Transparent overlay so the whole badge area is a single link, not just
          the image/text inside Credly's iframe. */}
      <a
        href={`https://www.credly.com/badges/${badgeId}/public_url`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View credential on Credly"
        className="absolute inset-0 z-10"
      />
    </div>
  )
}

export default function CredlyPage() {
  return (
    <section>
      <div className="my-8 flex flex-col gap-8">
        <CredlyBadge badgeId="cda4243a-be96-4e98-8122-895017173714" />
        <CredlyBadge badgeId="6ee7214c-659b-422d-aae8-9ae4d578ec23" />
      </div>
      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="afterInteractive" />
    </section>
  )
}

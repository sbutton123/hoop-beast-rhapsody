// src/components/RouteSeo.tsx
// Keeps the page title, meta description, canonical URL, and social tags
// in sync with the current route. The same settings are baked into static
// HTML files at build time by scripts/generate-page-html.mjs, so crawlers
// that do not run JavaScript still see the correct tags for each page.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import seo from '@/seo-pages.json'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove()
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const RouteSeo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Treat "/programs/" the same as "/programs"
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
    const page = seo.pages.find(p => p.path === path)

    if (page) {
      const url = page.path === '/' ? `${seo.siteUrl}/` : `${seo.siteUrl}${page.path}`
      document.title = page.title
      setMeta('name', 'description', page.description)
      setCanonical(url)
      setMeta('property', 'og:url', url)
      setMeta('property', 'og:title', page.title)
      setMeta('property', 'og:description', page.description)
      setMeta('name', 'twitter:url', url)
      setMeta('name', 'twitter:title', page.title)
      setMeta('name', 'twitter:description', page.description)
      removeMeta('name', 'robots')
    } else {
      // Unknown route: show the 404 page and keep it out of search results
      document.title = seo.notFound.title
      setMeta('name', 'description', seo.notFound.description)
      setCanonical(null)
      setMeta('name', 'robots', 'noindex')
    }
  }, [pathname])

  return null
}

export default RouteSeo

/** Caminho da app sem o prefixo do GitHub Pages (ex.: `/espetaculos`). */
export function normalizeAppPath(pathname = window.location.pathname) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  let path = pathname.replace(/\/+$/, '') || '/'
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/'
  }
  return path
}

/** Link interno respeitando `import.meta.env.BASE_URL`. */
export function appHref(route: string) {
  const base = import.meta.env.BASE_URL
  if (route === '/' || route === '') {
    return base
  }
  const clean = route.replace(/^\//, '')
  return `${base}${clean}`
}

export const ASSETS_BASE = `${import.meta.env.BASE_URL}assets`.replace(/\/{2,}/g, '/')

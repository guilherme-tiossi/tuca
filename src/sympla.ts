import { appHref } from './paths'

export const SYMPLA_TUCA_HOME =
  'https://site.bileto.sympla.com.br/tuca/?_gl=1*aapeye*_gcl_au*NTU0MDU2MDk5LjE3ODU5MzUzODg.*_ga*MTUxNjE1ODIwMi4xNzc3OTg1NTQy*_ga_KXH10SQTZF*czE3OTIyODE5NzgkbzI4JGcxJHQxNzkyMjgyMjQwJGo2MCRsMCRoMTU3NTA0MjM1NQ'

export const SYMPLA_EVENT_TODAS_COISAS =
  'https://bileto.sympla.com.br/event/126797?share_id=1-copiarlink'

export const SYMPLA_EVENT_PROVA_DE_VIDA =
  'https://bileto.sympla.com.br/event/128060/d/419362/s/2719980?share_id=1-copiarlink'

export function espetaculoSlug(title: string) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function espetaculoDetailHref(title: string) {
  return `${appHref('/espetaculos')}#${espetaculoSlug(title)}`
}

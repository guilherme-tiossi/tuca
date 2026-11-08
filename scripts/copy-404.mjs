import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, '..', 'dist')

copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))

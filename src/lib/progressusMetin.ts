/* Progressus yasal metinleri (src/data/legal/progressus/*.md) HTML'e
   buradan çevriliyor. Astro'nun kendi markdown hattı yerine marked
   kullanılıyor: Astro'daki smartypants düz tırnakları ve kesme
   işaretlerini kıvrık yapar, hukuki metin ise birebir kalmalı. */

import { marked } from 'marked'

export function metniHtmleCevir(kaynak: string): string {
  return marked.parse(kaynak, { async: false, gfm: true })
}

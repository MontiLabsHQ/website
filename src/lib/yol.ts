/* ============================================================
   Yol yardımcısı

   Site GitHub Pages'te bir alt yolda duruyor (/website/).
   Elle yazılan "/logo.png" gibi yollar bu tabanı atlar ve yayında
   404 verir. Bütün mutlak yollar bu yardımcıdan geçer.

   Astro `import.meta.env.BASE_URL` değerini derleme sırasında
   astro.config.mjs içindeki `base` alanından üretir.
   ============================================================ */

/** Baştaki ve sondaki eğik çizgiler tekilleştirilmiş taban. */
const taban = import.meta.env.BASE_URL.replace(/\/+$/, '')

/**
 * Site içi bir yolu taban yoluyla birleştirir.
 *
 *   yol('/kvkk')        -> '/website/kvkk'
 *   yol('/')            -> '/website/'
 *   yol('#iletisim')    -> '#iletisim'        (sayfa içi bağlantı)
 *   yol('/#iletisim')   -> '/website/#iletisim'
 *
 * Dış bağlantılar ve mailto adresleri olduğu gibi döner.
 */
export function yol(hedef: string): string {
  if (!hedef) return taban + '/'
  if (hedef.startsWith('#')) return hedef
  if (/^[a-z]+:/i.test(hedef) || hedef.startsWith('//')) return hedef
  if (hedef === '/') return taban + '/'
  return taban + (hedef.startsWith('/') ? hedef : '/' + hedef)
}

/** Sitenin kökü. Ortam değişkeni verilmediyse GitHub Pages adresi. */
const kok = (site: URL | undefined): string =>
  (site?.origin ?? 'https://montilabs.co').replace(/\/+$/, '')

/**
 * Taban yolu HENÜZ EKLENMEMİŞ bir yoldan tam adres üretir.
 * OG görseli gibi varlıklar için.
 *
 *   tamAdres('/og.png') -> 'https://.../website/og.png'
 */
export function tamAdres(hedef: string, site: URL | undefined): string {
  return kok(site) + yol(hedef)
}

/**
 * Taban yolu ZATEN EKLENMİŞ bir yoldan tam adres üretir.
 * sayfaYolu() çıktısı için bunu kullanın; tamAdres() kullanırsanız
 * taban ikinci kez eklenir ve adres /website/website/ olur.
 *
 *   mutlak(sayfaYolu('/', 'en')) -> 'https://.../website/en/'
 */
export function mutlak(tabanliYol: string, site: URL | undefined): string {
  return kok(site) + tabanliYol
}

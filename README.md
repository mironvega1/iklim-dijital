# İklimDijital Landing Page

İklimDijital, sadece klima firmalarına özel Meta Ads odaklı potansiyel müşteri mesajı sistemi için hazırlanmış statik landing page projesidir.

Bu proje Vega projesinden tamamen bağımsızdır. Vega klasörü, Vega reposu veya Vega dosyalarıyla bağlantı kurmaz.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Build

```bash
npm run build
```

Build çıktısı `dist` klasörüne üretilir.

## GitHub Pages Deploy

Deploy akışı `.github/workflows/deploy.yml` içindedir. `main` branch'e push geldiğinde:

1. Bağımlılıklar `npm install` ile kurulur.
2. `npm run build` çalışır.
3. `dist` klasörü GitHub Pages'e deploy edilir.

Repo path ile yayın adresi:

```text
https://mironvega1.github.io/iklim-dijital/
```

Bu senaryo için `astro.config.mjs` içinde:

```js
site: "https://mironvega1.github.io",
base: "/iklim-dijital"
```

## Custom Domain Notu

İleride custom domain bağlanırsa `astro.config.mjs` içindeki ayarlar şu şekilde güncellenebilir:

```js
site: "https://alanadiniz.com",
base: "/"
```

Custom domain kullanıldığında `public/robots.txt` ve `public/sitemap.xml` içindeki URL'ler de yeni alan adına göre güncellenmelidir.

## WhatsApp Numarası

WhatsApp numarası ve hazır mesaj `src/config.ts` içinden değiştirilir:

```ts
whatsappNumber: "90XXXXXXXXXX",
whatsappMessage: "Merhaba, klima firmam için reklam sistemi hakkında bilgi almak istiyorum.",
```

Tüm CTA butonları `whatsappUrl` değerini bu ayarlardan otomatik üretir.

## Renkler ve Font

- Arka plan: `#050505`
- Ana yazı: `#FFFFFF`
- Yeşil vurgu: `#93C83E`
- Kart arka planı: `#101010`, `#151515`
- Gri metin: `#B8B8B8`
- Font: Montserrat

## Teknik Yapı

- Astro
- Tailwind CSS
- Statik build
- GitHub Pages
- Backend, database, auth, admin panel veya form backend yoktur.

export const siteConfig = {
  brandName: "İklimDijital",
  whatsappNumber: "90XXXXXXXXXX",
  whatsappMessage: "Merhaba, klima firmam için reklam sistemi hakkında bilgi almak istiyorum.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
};

export const seoConfig = {
  title: "İklimDijital | Klima Firmalarına Özel Reklam Sistemi",
  description:
    "İklimDijital, klima bakım, montaj, arıza ve temizlik hizmetleri sunan firmalar için Meta Ads odaklı potansiyel müşteri akışı sistemi kurar.",
  keywords:
    "klima reklam, klima firması reklam, klima servisi reklam, meta ads klima, klima müşteri bulma, iklim dijital, klima firması müşteri bulma",
};

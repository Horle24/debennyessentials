export const WHATSAPP_NUMBER = '2349127349950';

export const WHATSAPP_URL = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// ── Women's Categories ──────────────────────────────────────────────────────
export const womenCategories = [
  { id: 'tops', label: 'Tops', sub: ['Shirts', 'Corsets', 'Blouses', 'Ready to Wear'] },
  { id: 'bottoms', label: 'Bottoms', sub: ['Skirts', 'Pants'] },
  { id: 'dresses', label: 'Dresses & Jumpsuits', sub: ['Maxi', 'Midi', 'Mini', 'Gowns', 'Jumpsuits'] },
  { id: 'activewear', label: 'Activewear', sub: ['Leggings', 'Tracksuits'] },
  { id: 'intimates', label: 'Intimates & Sleepwear', sub: ['Lingerie', 'Pajamas'] },
];

// ── Kids' Categories ────────────────────────────────────────────────────────
export const kidsCategories = [
  { id: 'baby-girl', label: 'Baby Girl', sub: ['Onesies', 'Rompers', 'Dresses'] },
  { id: 'female', label: 'Girls (2–12)', sub: ['Casual Dresses', 'Party Dresses', 'School Wear'] },
];

// ── Styles Gallery ──────────────────────────────────────────────────────────
export const styles = [
  {
    id: 's1',
    title: 'Crimson Evening Gown',
    category: 'Women — Gowns',
    description: 'Floor-length draped silhouette with off-shoulder neckline. Pure elegance redefined.',
    image: 'https://images.unsplash.com/photo-1566479179817-c0ae66cc04b3?w=600&q=80',
    tags: ['Gown', 'Evening', 'Women'],
  },
  {
    id: 's2',
    title: 'Pearl Midi Dress',
    category: 'Women — Midi',
    description: 'Structured midi with puff sleeves and pearl-button detailing. Effortless sophistication.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    tags: ['Midi', 'Casual Luxury', 'Women'],
  },
  {
    id: 's3',
    title: 'Blush Corset Top',
    category: 'Women — Tops',
    description: 'Boned corset with lace-up back. A statement piece for any occasion.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    tags: ['Corset', 'Top', 'Women'],
  },
  {
    id: 's4',
    title: 'Little Princess Gown',
    category: 'Kids — Girls',
    description: 'Tulle layered princess dress with floral embroidery. For your little queen.',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80',
    tags: ['Kids', 'Girls', 'Party'],
  },
  {
    id: 's5',
    title: 'Maxi Kaftan Dress',
    category: 'Women — Maxi',
    description: 'Wide-sleeve maxi kaftan in rich Ankara-inspired print. Regal and free-flowing.',
    image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&q=80',
    tags: ['Maxi', 'Kaftan', 'Women'],
  },
  {
    id: 's6',
    title: 'Satin Slip Mini',
    category: 'Women — Mini',
    description: 'Bias-cut satin mini with adjustable straps. Minimal, sensual, iconic.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    tags: ['Mini', 'Satin', 'Women'],
  },
  {
    id: 's7',
    title: 'Flower Girl Midi',
    category: 'Kids — Baby Girl',
    description: 'Smocked bodice with floral midi skirt. Perfect for weddings and celebrations.',
    image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80',
    tags: ['Kids', 'Baby Girl', 'Wedding'],
  },
  {
    id: 's8',
    title: 'Power Jumpsuit',
    category: 'Women — Jumpsuits',
    description: 'Wide-leg structured jumpsuit with deep V-neckline. Boss-lady energy.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    tags: ['Jumpsuit', 'Women', 'Power'],
  },
  {
    id: 's9',
    title: 'Ruched Bodycon Dress',
    category: 'Women — Midi',
    description: 'Figure-hugging ruched midi with square neck. For the woman who owns every room.',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
    tags: ['Bodycon', 'Midi', 'Women'],
  },
  {
    id: 's10',
    title: 'Ruffled Blouse',
    category: 'Women — Tops',
    description: 'Cascading ruffle blouse in ivory chiffon. Romantic and refined.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
    tags: ['Blouse', 'Top', 'Women'],
  },
  {
    id: 's11',
    title: 'Girls Party Set',
    category: 'Kids — Girls',
    description: 'Two-piece crop top and flared skirt set for the mini fashion girl.',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80',
    tags: ['Kids', 'Girls', 'Party'],
  },
  {
    id: 's12',
    title: 'Velvet Evening Gown',
    category: 'Women — Gowns',
    description: 'Deep burgundy velvet gown with thigh-high slit. Commanding presence guaranteed.',
    image: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=600&q=80',
    tags: ['Gown', 'Velvet', 'Evening'],
  },
];

// ── Ready-to-Wear Shop Items ─────────────────────────────────────────────────
export const shopItems = [
  {
    id: 'rtw1',
    name: 'Ivory Lace Midi Dress',
    price: 45000,
    category: 'Women',
    type: 'Ready to Wear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Blush', 'Black'],
    description:
      'Handcrafted lace midi dress with sweetheart neckline and zip-back closure. Ready to wear and ship.',
    image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&q=80',
    badge: 'New Arrival',
  },
  {
    id: 'rtw2',
    name: 'Black Sequin Mini',
    price: 38000,
    category: 'Women',
    type: 'Ready to Wear',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Gold'],
    description:
      'All-over sequin mini dress with thin straps. Perfect for events and nights out.',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'rtw3',
    name: 'Kids Ankara Princess Gown',
    price: 22000,
    category: 'Kids',
    type: 'Ready to Wear',
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
    colors: ['Multi'],
    description:
      'Vibrant Ankara princess gown with tutu skirt, fully lined. Perfect for celebrations.',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80',
    badge: 'Kids\' Pick',
  },
  {
    id: 'rtw4',
    name: 'Satin Wrap Maxi',
    price: 52000,
    category: 'Women',
    type: 'Ready to Wear',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Rose Gold', 'Emerald', 'Cobalt'],
    description:
      'Luxurious satin wrap maxi with tie waist and side slit. Effortless elegance.',
    image: 'https://images.unsplash.com/photo-1566479179817-c0ae66cc04b3?w=600&q=80',
    badge: 'Luxury Pick',
  },
  {
    id: 'rtw5',
    name: 'Puff Sleeve Blouse',
    price: 18500,
    category: 'Women',
    type: 'Ready to Wear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Black'],
    description:
      'Structured puff sleeve blouse with pearl buttons. Pairs beautifully with trousers or skirts.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
    badge: null,
  },
  {
    id: 'rtw6',
    name: 'Baby Girl Tutu Set',
    price: 16000,
    category: 'Kids',
    type: 'Ready to Wear',
    sizes: ['0-3M', '3-6M', '6-12M', '1Y', '2Y'],
    colors: ['Pink', 'Lavender', 'White'],
    description:
      'Adorable tutu skirt and top set for baby girls. Soft cotton, gentle on skin.',
    image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80',
    badge: 'Adorable',
  },
];

// ── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: 'Debenny made my daughter\'s birthday dress and I was moved to tears. The craftsmanship is beyond anything I\'ve seen in Nigeria. We looked like royalty.',
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Fatima Al-Hassan',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: 'I ordered a custom gown for my wedding event and it arrived perfectly. The quality of fabric and stitching is world-class. Highly recommend!',
    avatar: 'F',
  },
  {
    id: 3,
    name: 'Chidinma Ezeh',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    text: 'Finally a Nigerian brand that delivers luxury at its truest. My ready-to-wear midi dress fit like it was sewn on my body. I\'m obsessed.',
    avatar: 'C',
  },
  {
    id: 4,
    name: 'Blessing Osei',
    location: 'Accra, Ghana',
    rating: 5,
    text: 'Ordered internationally and the experience was seamless. The packaging alone screamed premium. Will be ordering again very soon.',
    avatar: 'B',
  },
  {
    id: 5,
    name: 'Amina Yusuf',
    location: 'Kano, Nigeria',
    rating: 5,
    text: 'My girls\' matching outfits for Eid were everything. People kept asking where I bought them. Thank you Debenny for making my family shine.',
    avatar: 'A',
  },
];

// ── Lookbook Images ─────────────────────────────────────────────────────────
export const lookbookImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', alt: 'Lookbook 1', span: 'large' },
  { id: 2, src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80', alt: 'Lookbook 2', span: 'small' },
  { id: 3, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', alt: 'Lookbook 3', span: 'small' },
  { id: 4, src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80', alt: 'Lookbook 4', span: 'small' },
  { id: 5, src: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=800&q=80', alt: 'Lookbook 5', span: 'large' },
  { id: 6, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', alt: 'Lookbook 6', span: 'small' },
  { id: 7, src: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80', alt: 'Lookbook 7', span: 'small' },
  { id: 8, src: 'https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?w=800&q=80', alt: 'Lookbook 8', span: 'large' },
];

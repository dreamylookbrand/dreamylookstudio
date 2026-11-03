// Services are taken from the studio's Google Business Profile service list.
// Edit / add / remove entries here. `message` is the WhatsApp text for the card button.
import { waMessages } from '../config/business.js';

const img = (p) => `/images/${p}`;

export const services = [
  {
    id: 'bridal-makeup',
    title: 'Bridal & Wedding Makeup',
    icon: 'bridal',
    featured: true,
    image: { src: img('bridal/bridal-makeup-red-lehenga-03'), alt: 'Bridal makeup with maang tikka and red lehenga at Dreamy Look Studio, Firozabad' },
    description:
      'Complete bridal looks for the wedding day and every function around it, planned around your outfit, jewellery and the way you want to feel.',
    items: ['Bridal Makeup', 'Engagement Makeup', 'Reception Makeup', 'Pre-wedding Makeup', 'Cocktail Makeup', 'Haldi Makeup', 'Mehndi Makeup Look', 'Mehndi Design', 'Wedding & Event Preparation'],
    message: waMessages.bridal,
    cta: 'Enquire about bridal',
  },
  {
    id: 'party-makeup',
    title: 'Party & Occasion Makeup',
    icon: 'party',
    featured: true,
    image: { src: img('makeup/party-makeup-black-dress-02'), alt: 'Party makeup with soft glam look and long earrings' },
    description: 'Polished makeup for parties, functions and special evenings, from soft glam to bold eyes.',
    items: ['Make-up', 'Make-up Services', 'Party Makeup'],
    message: waMessages.party,
    cta: 'Enquire about party makeup',
  },
  {
    id: 'hairstyling',
    title: 'Hairstyling',
    icon: 'scissors',
    featured: true,
    image: { src: img('makeup/reception-makeup-hair-curls-03'), alt: 'Long curled hairstyle with reception makeup' },
    description: 'Curls, blow dry, braids and styled looks for weddings, events and everyday.',
    items: ['Hair Styling', 'Blow Dry', 'Braids', 'Box Braids', 'Dreadlocks', 'Hair Extensions'],
    message: waMessages.hair,
    cta: 'Enquire about hairstyling',
  },
  {
    id: 'haircut',
    title: 'Haircuts',
    icon: 'scissors',
    description: 'Cuts shaped to your face and hair type.',
    items: ['Hair Cutting', 'Layers Haircut', 'Butterfly Cutting', 'Graduation Haircut', 'Step Cutting', 'V Cutting', 'U Cutting', 'Straight Hair Cutting'],
    message: waMessages.hair,
    cta: 'Enquire about haircuts',
  },
  {
    id: 'hair-colour',
    title: 'Hair Colour',
    icon: 'drop',
    description: 'Colour services from root touch-ups to dimensional highlights.',
    items: ['Global Hair Colour', 'Highlights Hair Colour', 'Balayage', 'Root Touch Up'],
    message: waMessages.hair,
    cta: 'Enquire about hair colour',
  },
  {
    id: 'hair-chemical',
    title: 'Hair Chemical & Smoothing',
    icon: 'wave',
    description: 'Smoothing and chemical hair treatments. Please message us to discuss what suits your hair.',
    items: ['Hair Chemical Work', 'Hair Chemical Treatment', 'Smoothing', 'Keratin', 'Kera Smoothing'],
    message: waMessages.hair,
    cta: 'Enquire about hair treatments',
  },
  {
    id: 'nails',
    title: 'Nail Extensions & Nail Art',
    icon: 'nails',
    description: 'Extensions, shapes and nail art, plus classic hand and foot care.',
    items: ['Nail Extension', 'Nail Art', 'Nail Shapes', 'Acrylic Nails', 'Manicure', 'Pedicure'],
    message: waMessages.nails,
    cta: 'Enquire about nails',
  },
  {
    id: 'skin',
    title: 'Facial & Skincare',
    icon: 'leaf',
    description: 'Skin-focused and relaxing services.',
    items: ['Facials', 'Skin Care', 'Massage', 'Tanning', 'Shampoo & Conditioning'],
    message: waMessages.general,
    cta: 'Enquire about skincare',
  },
  {
    id: 'brows-lashes',
    title: 'Eyebrows & Lashes',
    icon: 'eye',
    description: 'Brow and lash services to frame the eyes.',
    items: ['Eyebrow Shaping', 'Eyebrow Threading', 'Eyebrow Beautification', 'Brow Lamination', 'Eyelashes', 'Eyelash Extensions', 'Lash Lift'],
    message: waMessages.general,
    cta: 'Enquire about brows & lashes',
  },
  {
    id: 'waxing',
    title: 'Waxing & Grooming',
    icon: 'feather',
    description: 'Hair removal and grooming services.',
    items: ['Waxing', 'Body Waxing', 'Brazilian Waxing', 'Hair Threading', 'Shaving'],
    message: waMessages.general,
    cta: 'Enquire about waxing',
  },
];

// Also listed on the studio's Google profile
export const alsoListed = ['Bridal Services', 'Mobile Salon Service', 'Online Beauty Salon Booking'];

// ============================================================
//  CENTRAL BUSINESS CONFIGURATION
//  Edit contact details, hours, links and WhatsApp messages here.
// ============================================================
export const business = {
  brand: 'Dreamy Look Studio & Academy',
  shortName: 'Dreamy Look Studio',
  owner: 'Lovely',
  domain: 'dreamylookstudio.in',
  url: 'https://dreamylookstudio.in/',

  phone: '+91 9368707072',
  phoneHref: '+919368707072',
  whatsappNumber: '919368707072', // country code + number, no "+" or spaces
  email: 'dreamylook.enquiry@gmail.com',

  address: {
    full: 'Gali No. 4, Kotla Rd, Rani Nagar, Saiyad Wali Gali, Dayal Nagar, Firozabad, Sukhmalpur Nizamabad, Uttar Pradesh 283203, India',
    street: 'Gali No. 4, Kotla Rd, Rani Nagar, Saiyad Wali Gali, Dayal Nagar, Sukhmalpur Nizamabad',
    city: 'Firozabad',
    region: 'Uttar Pradesh',
    postalCode: '283203',
    country: 'IN',
  },

  // Coordinates are taken from the Google Maps listing link supplied by the owner.
  geo: { lat: 27.1767504, lng: 78.4040394 },

  hours: {
    label: 'Daily, 8:00 AM to 10:00 PM',
    opens: '08:00',
    closes: '22:00',
  },

  maps: {
    // Full Google Maps listing (used for directions + reviews)
    listing:
      'https://www.google.com/maps/place/Dreamy+Look+Studio+%26+Academy/@27.1767551,78.4014645,17z/data=!3m1!4b1!4m6!3m5!1s0x397445e33d2ee35f:0x5b3c833e6fd078a0!8m2!3d27.1767504!4d78.4040394!16s%2Fg%2F11zzvvlghs',
    short: 'https://maps.app.goo.gl/MczDXjFNeyAiACay7',
    // Free, keyless embed (shows the listing pin; rating & reviews open in Google Maps)
    embed:
      'https://www.google.com/maps?q=Dreamy+Look+Studio+%26+Academy%4027.1767504,78.4040394&z=17&output=embed',
  },

  social: {
    instagram: 'https://www.instagram.com/dreamylookstudio/',
    facebook: 'https://www.facebook.com/dreamylookstudio/',
    youtube: 'https://www.youtube.com/@dreamylookstudio',
  },
  instagramHandle: '@dreamylookstudio',
};

// Prefilled WhatsApp messages (encoded automatically by waLink()).
export const waMessages = {
  general: 'Hello Dreamy Look Studio & Academy, I would like to make an enquiry.',
  appointment: 'Hello Dreamy Look Studio & Academy, I would like to request an appointment.',
  bridal: 'Hello Dreamy Look Studio & Academy, I would like to enquire about bridal makeup.',
  party: 'Hello Dreamy Look Studio & Academy, I would like to enquire about party makeup.',
  hair: 'Hello Dreamy Look Studio & Academy, I would like to enquire about hair services.',
  nails: 'Hello Dreamy Look Studio & Academy, I would like to enquire about nail extensions and nail art.',
  academy: 'Hello Dreamy Look Studio & Academy, I would like to enquire about your makeup academy courses.',
  lovely: 'Hello Lovely, I found you through the Dreamy Look Studio & Academy website and would like to connect.',
};

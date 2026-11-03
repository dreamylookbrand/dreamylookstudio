// Gallery data. Add a new photo by creating 3 WebP sizes (-480, -800, -1200) and adding an entry here.
// category: bridal | reception | party | haldi | studio

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'reception', label: 'Reception & Engagement' },
  { id: 'party', label: 'Party Makeup' },
  { id: 'haldi', label: 'Haldi & Mehndi' },
  { id: 'studio', label: 'At the Studio' },
];

const item = (folder, name, category, alt) => ({
  category,
  alt,
  w: 1200,
  h: 1600,
  src: `/images/${folder}/${name}-1200.webp`,
  srcset: `/images/${folder}/${name}-480.webp 480w, /images/${folder}/${name}-800.webp 800w, /images/${folder}/${name}-1200.webp 1200w`,
});

export const gallery = [
  item('bridal', 'bridal-red-lehenga-full-look-01', 'bridal', 'Bride in red and gold bridal lehenga with complete bridal makeup and jewellery, Firozabad'),
  item('bridal', 'bridal-makeup-close-look-02', 'bridal', 'Bride with bridal makeup, kundan jewellery and bangles, styled by Dreamy Look Studio'),
  item('bridal', 'bridal-makeup-red-lehenga-03', 'bridal', 'Bridal makeup with maang tikka, necklace and red lehenga'),
  item('bridal', 'bridal-dupatta-look-04', 'bridal', 'Bride in red lehenga with golden dupatta and mehndi hands'),
  item('bridal', 'bridal-jewellery-bangles-05', 'bridal', 'Bride posing with chooda bangles and bridal jewellery'),
  item('bridal', 'bridal-smile-full-length-06', 'bridal', 'Bride in full bridal look smiling at the camera'),
  item('bridal', 'bridal-reception-pose-07', 'bridal', 'Bride in red velvet lehenga posing in studio'),
  item('bridal', 'bridal-red-saree-makeup-01', 'bridal', 'Bride in red bridal saree with sindoor and traditional makeup'),
  item('bridal', 'bridal-saree-closed-eyes-02', 'bridal', 'Bridal saree makeup look with sindoor, nath and gold jewellery'),
  item('bridal', 'bridal-saree-close-up-03', 'bridal', 'Close-up of traditional bridal makeup with nath and red lips'),
  item('bridal', 'bridal-saree-dupatta-05', 'bridal', 'Bride in red banarasi saree with dupatta draped over the head'),
  item('makeup', 'reception-makeup-lavender-lehenga-01', 'reception', 'Reception makeup and open curls with lavender sequin lehenga'),
  item('makeup', 'engagement-makeup-closeup-02', 'reception', 'Engagement and reception makeup with soft curls and choker'),
  item('makeup', 'reception-makeup-hair-curls-03', 'reception', 'Reception makeup with long curled hairstyle'),
  item('makeup', 'reception-makeup-profile-04', 'reception', 'Soft glam reception makeup with floral hair accessory'),
  item('hairstyles', 'hairstyle-curls-back-view-05', 'reception', 'Back view of long curled bridal hairstyle with hair accessory'),
  item('makeup', 'reception-lehenga-full-length-09', 'reception', 'Full-length reception look in lavender lehenga with makeup and hairstyle'),
  item('makeup', 'party-makeup-smokey-eyes-01', 'party', 'Party makeup with smokey eyes and curled hair'),
  item('makeup', 'party-makeup-black-dress-02', 'party', 'Party makeup with soft glam and long earrings'),
  item('makeup', 'party-makeup-eye-closeup-03', 'party', 'Close-up of party makeup eye look with glitter detailing'),
  item('hairstyles', 'party-hairstyle-waves-04', 'party', 'Party hairstyle with loose waves and half-up braid'),
  item('makeup', 'haldi-makeup-flower-jewellery-05', 'haldi', 'Haldi makeup look with fresh flower jewellery and pink outfit'),
  item('makeup', 'mehndi-haldi-makeup-closeup-06', 'haldi', 'Close-up of haldi makeup with flower maang tikka and earrings'),
  item('makeup', 'haldi-mehndi-pose-07', 'haldi', 'Mehndi and haldi function look with floral jewellery'),
  item('makeup', 'haldi-floral-jewellery-pose-08', 'haldi', 'Haldi function look with floral jewellery and pink dupatta'),
  item('studio', 'client-and-makeup-artist-studio-06', 'studio', 'Client in lavender lehenga standing with a team member at the studio'),
  item('studio', 'bridal-dupatta-setting-07', 'studio', 'Dupatta being set on a bride at the Dreamy Look Studio photo corner'),
  item('studio', 'bridal-final-touches-08', 'studio', 'Final bridal touches being done in the studio'),
  item('studio', 'bride-with-team-member-04', 'studio', 'Bride in red saree standing with a team member after makeup'),
];

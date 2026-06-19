export const createAdventure = (adventure) => ({
  public: false,
  featured: false,
  gallery: [],
  blocks: [],
  stravaUrl: '',
  gpxUrl: '',
  ...adventure,
})

export const p = (text) => ({
  type: 'paragraph',
  text,
})

export const h = (text) => ({
  type: 'heading',
  text,
})

export const img = (src, alt, layout = 'normal', caption = '') => ({
  type: 'image',
  src,
  alt,
  layout,
  caption,
})

export const quote = (text) => ({
  type: 'quote',
  text,
})

export const gallery = (images) => ({
  type: 'gallery',
  images,
})
export const getThumb = (image) => {
  const path = image.filename.replace('https://a.storyblok.com', '')
  return `//img2.storyblok.com/300x300${path}`
}

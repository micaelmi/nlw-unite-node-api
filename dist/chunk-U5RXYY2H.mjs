// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

export {
  generateSlug
};
